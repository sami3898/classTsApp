import React from 'react'
import {render, screen} from '@testing-library/react-native'

import HomeScreen from './'
import { FlatList } from 'react-native'
import ListItem from '../../Component/ListItem'

describe('Render Home Screen', () => { 
    it(' Should render home screen ', () => {
        render(<HomeScreen />)
    })

    it(' Should render flatlist ', () => {
        render(<HomeScreen />)
        const flatList = screen.getByTestId('flatListTest')
        expect(flatList).toBeDefined()
    })
 })

 