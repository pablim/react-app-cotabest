import { UPDATE_LIST, FETCH_LIST } from "./actionTypes";

export const fetchList = (list) => {
    return {
        type: FETCH_LIST,
        payload: list
    }
}

export const updateList = (newList) => {
    return {
        type: UPDATE_LIST,
        payload: newList
    }
}


