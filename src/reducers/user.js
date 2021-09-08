import { userType } from '../actions/actionTypes';

const initState = {
    userInfo: JSON.parse(localStorage.getItem('__userinfo__') || '{}'),
    isLogin: Boolean(localStorage.getItem('__token__')),
    isLoading: false,
}

const user = (state = initState, action) => {
    switch (action.type) {
        case userType.FETCH_USER:
            return {
                ...state,
                isLoading: true
            };
        case userType.FETCH_USER_SUCC:
            console.log(action);
            localStorage.setItem('__token__', true);
            localStorage.setItem('__userinfo__', JSON.stringify(action.data.userInfo));
            return {
                userInfo: action.data.userInfo,
                isLoading: false,
                isLogin: true
            };
        case userType.FETCH_USER_FAIL:
            return {
                ...state,
                isLoading: false
            };
        case userType.LOGOUT:
            localStorage.removeItem('__token__');
            return {
                ...state,
                userInfo: {},
                isLogin: false,
            }
        default:
            return state;
    }
}

export default user