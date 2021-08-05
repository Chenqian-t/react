import { api } from '../utils';

class Api {
    static getUserInfo = (params) => api({
        url: '',
        method: 'get',
        params,
    })
}

export default Api