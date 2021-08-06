import {friendsListType} from '../actions/actionsType';

const initState = [{
    username: 'id2',
    avatar: '',
},{
    username: 'id3',
    avatar: '',
}]

const friendsList = (state=initState, action) => {
    switch (action.type) {
        case friendsListType.GET_FRIENDS_LIST:
            return state;
        default:
            return state;
    }
}

export default friendsList