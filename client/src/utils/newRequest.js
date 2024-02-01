import axios from 'axios';

const newRequest = axios.create({
    baseURL: 'https://t-work-api.vercel.app/api/',
    withCredentials: true,
});

// Add a response interceptor to handle errors
newRequest.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized errors, e.g., redirect to the login page
            console.error('Unauthorized:', error.response.data.message);
            // Redirect to the login page
            window.location.href = '/login';
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default newRequest;