import React from 'react'
import {
    getCharactersRequest, 
    getCharactersByNameRequest
} from '../api/services/Characters'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

import List from '../components/List';

test('request getCharactersRequest', async () => {
    await getCharactersRequest().then(response => {
        return response.data.results
    })
})

test('request getCharactersByNameRequest', async () => {
    await getCharactersByNameRequest("rick s").then(response => {
        return response.data.results
    })
})

test('loads and displays list', async () => {
    var list = [];
    await getCharactersRequest().then(response => {
        list = response.data.results
    })
        
    // Arrange
    render(<List characterList={list}/>)

    // Assert
    expect(screen.getAllByRole('card-list-item-showed'))

    // Act
    //fireEvent.change(screen.getByRole('search-input'), {target: {value: 'rick s'}})

    // Assert
    expect(screen.getAllByRole('card-list-item-showed'))
})

test('displays empty list', async () => {
    // Arrange
    render(<List list={[]}/>)
    
    // Assert
    expect(screen.getByRole('empty-list')).toHaveTextContent('Nothing here')
})
