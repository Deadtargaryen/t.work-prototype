import axios from 'axios'

const newRequest = axios.create({
    baseURL:'https://t-work-api.vercel.app/api/', 
    withCredentials: true,
})

export default newRequest
