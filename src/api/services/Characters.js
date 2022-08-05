import { makeRequest } from "../Api";

export const getCharactersRequest = () => {
    return makeRequest.get('/character')
    .then((response) => {
        return response
    })
}

export const getCharactersByNameRequest = (data) => {
    return makeRequest.get(`/character/?name=${data}`)
    .then((response) => {
        return response
    })
}