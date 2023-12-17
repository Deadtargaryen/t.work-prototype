import axios from 'axios'

const newRequest = axios.create({
    baseURL:'https://t-work-prototype-api-git-fullstack-mern-deadtargaryen.vercel.app', 
    withCredentials: true,
})

export default newRequest
