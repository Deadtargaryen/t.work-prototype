import axios from 'axios'

const newRequest = axios.create({
    baseURL:'https://t-work-prototype-api.vercel.app/api/', 
    withCredentials: true,
})

export default newRequest
