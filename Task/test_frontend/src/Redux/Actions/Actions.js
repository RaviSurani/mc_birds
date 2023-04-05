import { Services } from "./Service.js"
import Constants from "../Constants"


const addNewUser = (details) => {
    return (Dispatch) => {
        Dispatch({ type: Constants.ADD_USER_REQUEST, })
        Services.postService('/user/create', details).then(
            (response) => {
                if (response.sucess) { return Dispatch({ type: Constants.ADD_USER_SUCESS, data: response.data }) }
                else { return Dispatch({ type: Constants.ADD_USER_FAIL, data: response.data }) }
            },
            (error) => {
                return Dispatch({ type: Constants.ADD_USER_FAIL, data: error })
            }
        )

    }

}


const addUserAddress = (details) => {
    return (Dispatch) => {
        Dispatch({ type: Constants.ADD_USER_ADDRESS_REQUEST, })

        Services.postService('/user/address', details).then(
            (response) => {
                if (response.sucess) { return Dispatch({ type: Constants.ADD_USER_ADDRESS_SUCESS, data: response.data }) }
                else { return Dispatch({ type: Constants.ADD_USER_ADDRESS_FAIL, data: Response.data }) }
            },
            (error) => {
                return Dispatch({ type: Constants.ADD_USER_ADDRESS_FAIL, data: error })
            })
    }
}

export {
    addNewUser,
    addUserAddress
}