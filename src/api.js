import axios from 'axios'

export const API = axios.create({
    baseURL: process.env.NODE_ENV != 'production' ?
        'https://stay-at-home-back.herokuapp.com/' : 'http://localhost:3000/'
})