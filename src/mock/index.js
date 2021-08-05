import mock from 'mockjs';
import { base_url } from '../config';

mock.mock(`${base_url}/getuserinfo`, {
    errcode: 0,
    message: 'ok',
    data: {
        username: '@cname',
    }
});