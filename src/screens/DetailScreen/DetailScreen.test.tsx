import React from 'react'
import {render, screen} from '@testing-library/react-native'

import DetailScreen from './'

describe('Render Details Screen', () => { 
    it (' should render screen ', () => {
        const navigation = {navigate:() => {}, setOptions: () => {}}
        spyOn(navigation,'navigate')
        render(<DetailScreen route={{params: {title: 'hero', url: 'url'}}} navigation={navigation}  />)
    })
 })
