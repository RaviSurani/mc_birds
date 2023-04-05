import Constants from '../Constants'
import { combineReducers } from "redux"

export const addNewUserReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.ADD_USER_REQUEST: {
            return { ...state, Loading: true }
        }
        case Constants.ADD_USER_SUCESS: {
            return { ...state, userDetails: action.data, Loading: false }
        }
        case Constants.ADD_USER_FAIL: {
            return { ...state, Error: action.data, Loading: false }
        }
        default:
            return { ...state }
    }
}


export const addUserAddressReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.ADD_USER_ADDRESS_REQUEST: {
            return { ...state, Loading: true }
        }
        case Constants.ADD_USER_ADDRESS_SUCESS: {
            return { ...state, userAddressDetails: true, Loading: false }
        }
        case Constants.ADD_USER_ADDRESS_FAIL: {
            return { ...state, Error: '', Loading: false }
        }
        default:
            return { ...state }
    }
}



export const MainReducer = combineReducers({
    addNewUserReducer,
    addUserAddressReducer
})

