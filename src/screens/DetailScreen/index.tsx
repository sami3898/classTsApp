import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles';

interface State {
    details: Array<object | any>;
    currentUrl: string;
}

export default class DetailScreen extends Component<{},State> {

    constructor(props: {} | Readonly<{}>) {
        super(props)
    }

    componentDidMount(): void {
        const params = this.props?.route?.params
        console.log(this.state.currentUrl)
        this.setTitle(params.title)
        this.fetchPokemonDetails(params.url)
    }

    // TODO: set title on navigation bar
    setTitle(title: string) {
        this.props.navigation.setOptions({
            title: title
        })
    }

    // TODO: fetch pokemon details
    async fetchPokemonDetails(url: string) {
        await fetch(url)
        .then(async response => {
            const jsonData = await response.json()
            this.setState({details: jsonData})
        })
        .catch(error => {
            console.log('API Error: ', error)
        })
    }

    state: State = {
        details: [],
        currentUrl: '',
    }



  render() {

    const {details} = this.state
    console.log('details: ',JSON.stringify(details))
    return (
      <SafeAreaView style={styles.container} >
        <Image 
            source={{uri: details?.sprites?.front_default}}
            style={styles.imageStyle}
        />
        <Text style={styles.nameStyle} >{`Rank: #${details?.order}`}</Text>
        <Text style={styles.nameStyle} >{`Name: ${details?.name}`}</Text>
        <View style={styles.rowContainer} >
            <Text style={styles.labelStyle} >{`Height: ${details?.height}`}</Text>
            <Text style={[styles.labelStyle, {marginLeft: 12}]} >{`Weight: ${details?.weight}`}</Text>
        </View>
      </SafeAreaView>
    )
  }
}