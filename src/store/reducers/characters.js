import { 
    FETCH_LIST, 
    UPDATE_LIST, 
    FETCH_LIST_FAILED, 
    FETCH_LIST_SUCCEEDED 
} from "../actions/actionTypes";

const initialState = {
    list: [],
    term: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST:
            return {
                ...state, list: action.payload
            }
        case UPDATE_LIST:
            return {
                ...state, term: action.payload
            }
        case FETCH_LIST_SUCCEEDED: {
            return {
                list: action.payload
            }
        }
        case FETCH_LIST_FAILED: {
            return {
                list: []
            }
        }
        default: return state
    }
}