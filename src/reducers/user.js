import { userType } from '../actions/actionTypes';

const initState = {
    userInfo: {},
    isLogin: false,
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
            return {
                userInfo: action.payload,
                isLoading: false,
                isLogin: true
            };
        case userType.FETCH_USER_FAIL:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}

export default user