import { userType } from './actionTypes';
import { LoginApi } from '../api';
import { message } from 'antd';

const getUserInfo = ({username, password}) => async dispatch => {
    dispatch(fetchUser());
    let re = await LoginApi.login({ username, password });
    if (re.errcode === 0) {
        message.success('登陆成功！');
        dispatch(fetchUserSucc(re.data));
    } else {
        message.error('登陆失败！');
        dispatch(fetchUserFail());
    }
}

const logout = () => ({
    type: userType.LOGOUT,
})

const fetchUser = () => ({
    type: userType.FETCH_USER,
    isLoading: true,
});

const fetchUserSucc = (data) => ({
    type: userType.FETCH_USER_SUCC,
    isLoading: false,
    data,
});

const fetchUserFail = () => ({
    type: userType.FETCH_USER_FAIL,
    isLoading: false,
});

export { logout, getUserInfo, fetchUser, fetchUserSucc, fetchUserFail }