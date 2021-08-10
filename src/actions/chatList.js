import { chatListType } from './actionsType';

const getChatList = () => ({
    type: chatListType.GET_CHAT_LIST,
});

const getChatListFailed = () => async dispatch => {
    const re = await fetch('');
    dispatch(getChatList())
}

export { getChatList, getChatListFailed }