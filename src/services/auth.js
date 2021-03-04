import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'http://localhost:3000/auth');

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
    SIGNUP: async(data) => {
        return await service.post('/signup', data);
    },
    LOGIN: async(data) => {
        return await service.post('/login', data);
    },
    LOGGED: async() => {
        return await service.get('/logged');
    },
    LOGOUT: async() => {
        return await service.get('logout')
    }

};

export default AUTH_SERVICE