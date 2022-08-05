import { 
    legacy_createStore as createStore, 
    combineReducers, 
    applyMiddleware 
} from "redux"
import createSagaMiddleware from 'redux-saga'

import charactersReducer from "./reducers/characters";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    characterList: charactersReducer
})

function storeConfig() {
    return createStore(reducers, applyMiddleware(sagaMiddleware))
}

export default storeConfig
export const saga = sagaMiddleware