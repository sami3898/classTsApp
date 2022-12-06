import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

type Props = {
    item: object | any,
    index: number,
    navigation?: object
}

export default class ListItem extends Component<Props,{}> {

    
  render() {
    return (
        <TouchableOpacity testID='li-touchable' style={style.itemContainer} onPress={() => this.props.navigation?.navigate?.('Details',{title: this.props.item.name, url: this.props.item.url})} >
        <Text style={style.itemText} >{`#${this.props.index + 1}-${this.props.item.name}`}</Text>
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 24,
        paddingVertical: 16,
        borderBottomColor: '#222224',
        borderBottomWidth: 1
      },
      itemText: {
        fontSize: 18,
        color: '#252525',
        fontWeight: '700'
      }
})