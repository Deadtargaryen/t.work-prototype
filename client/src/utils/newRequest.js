import axios from 'axios'

const newRequest = axios.create({
    baseURL:'https://creepy-umbrella-bee.cyclic.app/', 
    withCredentials: true,
})

export default newRequest
