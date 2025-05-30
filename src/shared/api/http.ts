import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: false,
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
