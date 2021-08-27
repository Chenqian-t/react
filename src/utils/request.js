import axios from "axios";
import _ from 'lodash';
import { base_url } from '../config';

const service = axios.create({
	baseURL: base_url,
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 20000 // request timeout
});

// axios.defaults.withCredentials = true;//携带cookie

//http request 拦截器
service.interceptors.request.use(
	config => {
		//过滤空参数
		config.params = _.chain(config.params).keys().reduce((rs, key) => {
			const value = config.params[key]
			if (value || value === 0) {
				rs[key] = value
			}
			return rs
		}, {}).value()

		//token
		config.headers.token = sessionStorage.getItem('token')
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

//http response 拦截器
service.interceptors.response.use(
	response => {
		if (response.status === 200 && response.data && response.data.errcode === 401) {
			return Promise.reject()
		}

		const res = response.data;
		if (res.errcode === 999) {
			return Promise.reject()
		}
		return res
	},
	error => {
		console.log('err' + error) // for debug
		return Promise.reject(error)
	}
);

export default service