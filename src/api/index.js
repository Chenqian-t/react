import { api } from '../utils';

class Api {
    static getUserInfo = (params) => api({
        url: '/login',
        method: 'post',
        body: params,
    })
}

export default Api