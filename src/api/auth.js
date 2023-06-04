import axios from 'axios'
// const baseURL = 'https://js-post-api.herokuapp.com/api'
const URL = 'https://localhost:5000'

export const fetchlogin = (payload) => axios.post(`${URL}/login`, payload)
export const fetchregister = (payload) => axios.post(`${URL}/users/register`, payload)

