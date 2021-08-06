import { userType } from '../actions/actionsType';

const initState = {
    username: 'id1',
    avatar: '',
    currentId: 1628159540298,
}

const user = (state = initState, action) => {
    switch (action.type) {
        case userType.GET_USER_INFO:
            return state;
        default:
            return state;
    }
}

export default user