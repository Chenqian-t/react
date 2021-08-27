import { chatListType } from './actionsType';
import Api from '../api';

const getChatList = () => ({
    type: chatListType.GET_CHAT_LIST,
});

const getChatListFailed = () => async dispatch => {
    const re = await Api.getUserInfo();
    dispatch(getChatList());
}

export { getChatList, getChatListFailed }