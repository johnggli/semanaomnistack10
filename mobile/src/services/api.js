import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.104:3333',  // usando o celular
    // baseURL: 'http://localhost:3333',  // usando um emulador
});

export default api;