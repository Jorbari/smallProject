import axios from "axios";
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://fa00-169-255-124-13.ngrok.io/api';

const bearerToken = localStorage.getItem('token') || '';


export const getRequest = async (url: string = '') => {
    console.log(bearerToken)
   const response = await axios({
        method: 'get',
        url: `${baseUrl}/${url}`,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${bearerToken}`
        }
    })
    return response;
}

export const postRequest = async (url: string, data: any) => {
   const response = await axios({
        method: 'get',
        url: `${baseUrl}/${url}`,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${bearerToken}`
        },
        data
    })
    return response;
}

export const postRequestWithoutAuth = async (url: string, data: any) => {
   const response = await axios({
        method: 'post',
        url: `${baseUrl}/${url}`,
        headers: {
            Accept: 'application/json',
        },
        data
    })
    return response;
}
