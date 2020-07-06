 
import axios from 'axios';
const URL = 'http://localhost:8765/api';

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },

}
export const  getData = (resource) => {
    return axios.get(`${URL}/${resource}`, config);
}

export const  postData = (resource, data) => {
    return axios.post(`${URL}/${resource}`, data, config);
}