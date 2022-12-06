import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { style } from './styles';
import ListItem from '../../Component/ListItem';

interface State {
  counter: number;
  data: Array<object | any>;
  currentUrl: string;
}


export default class HomeScreen extends Component<{},State> {

  constructor(props: object | Readonly<{}>) {
    super(props)
  }

  async componentDidMount(): Promise<void> {
    await this.fetchPokemon()
  }

  state: State = {
    counter: 0,
    data: [],
    currentUrl: 'https://pokeapi.co/api/v2/pokemon' // initial URL
  };
  
// TODO: fetch API response
  fetchPokemon = async () => {
    await fetch(this.state.currentUrl,{
      method: 'GET'
    })
    .then(async response => {
      const jsonData = await response.json()
      let tempArr: Array<object> = this.state.data
      
      if (this.state.data.length > 1) { 
        jsonData.results.map((e: object) => {
          tempArr.push(e)
        })
        this.setState({data: tempArr, currentUrl: jsonData.next})
      } else {
        this.setState({data: jsonData.results, currentUrl: jsonData.next})
      }
      
    })
    .catch(error => {
      console.log(error)
    })
    
  }


// TODO: render flatlist items
  _renderItem = (item: object | any, index: number) => {
    const {navigation} = this.props
    return (
      <ListItem index={index} item={item} navigation={navigation} />
    )
  }

  render() {
    return (
      <SafeAreaView style={style.container} >
        <FlatList
          testID='flatListTest' 
          data={this.state.data}
          keyExtractor={(item, index) => `${item.name}#${index.toString()}`}
          renderItem={({item,index}) => this._renderItem(item,index)}
          onEndReached={() => this.fetchPokemon()}
        />
      </SafeAreaView>
    )
  }
}

