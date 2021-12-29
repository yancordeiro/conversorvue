import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://api.coinbase.com/v2/assets/search?BRL'
})