import { chatListType } from '../actions/actionsType';

const initState = [{
    groupname: 'xxxxxx',
    id: 1628159440298,
    lastMsg: 'hahah',
    utime: 1628159440298,
    members: ['id1', 'id2'],
},{
    groupname: 'xxx',
    id: 1628159540298,
    lastMsg: '你谁啊',
    utime: 1628159440298,
    members: ['id1', 'id2', 'id3', 'id4'],
}];

const chatList = (state = initState, actions) => {
    switch (actions.type) {
        case chatListType.GET_CHAT_LIST:
            return state;
        default:
            return state;
    }
}

export default chatList