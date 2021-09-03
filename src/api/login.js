import { request } from '../utils';

class LoginApi {
    static async login(params) {
        return request({
            url: '/login',
            method: 'POST',
            data: params
        });
    }
}

export default LoginApi