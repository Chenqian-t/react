import { userType } from './actionTypes';
import {LoginApi} from '../api';

const getUserInfo = (payload) => async dispatch => {
    dispatch(fetchUser());
    let re = await LoginApi.login({username: 'user1', password: '123456'});
    if (re.errcode === 0) {
        dispatch(fetchUserSucc(re.data));
    } else {
        dispatch(fetchUserFail());
    }
}

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

export { getUserInfo, fetchUser, fetchUserSucc, fetchUserFail }