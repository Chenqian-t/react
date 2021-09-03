import axios from 'axios';
import { base_url } from './config';

let request = axios.create({
    baseURL: base_url,
    timeout: 20000
});

request.interceptors.request.use(
    config => {
        config.headers.token = sessionStorage.getItem('token');
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

request.interceptors.response.use(
    response => {
        let res = response.data;
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);

export default request