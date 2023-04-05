
import axios from 'axios'
import Constants from '../Constants'

const postService = (endPoint, details) => {
    return axios.post(Constants.BASE_URL + endPoint, details)
        .then(Response => Response.data).catch(error => { return error.response });
}


export const Services = {
    postService,
}