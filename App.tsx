import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Screens
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'


type ScreenParamsList = {
  Home: undefined,
  Details: {title: string, url: string}
}
// Stack object
const Stack = createNativeStackNavigator<ScreenParamsList>()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{title: 'PokeDex', headerStyle: {backgroundColor: '#ee1515'}, headerTitleStyle: {fontSize: 18, color: '#fff'} }} />
          <Stack.Screen name='Details' component={DetailScreen} options={{title: 'PokeDex', headerStyle: {backgroundColor: '#ee1515'}, headerTitleStyle: {fontSize: 18, color: '#fff'} }} />
        </Stack.Navigator>
        </NavigationContainer>
    )
  }
}