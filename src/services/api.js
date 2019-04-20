import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boxebackend.herokuapp.com',
});

export default api;