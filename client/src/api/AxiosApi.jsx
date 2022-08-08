import axios from 'axios'

const AxiosApi = axios.create({
    baseURL: process.env.BASE_URL
})

export default AxiosApi