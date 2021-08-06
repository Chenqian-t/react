import { chatListType } from './actionsType';

const getChatList = () => ({
    type: chatListType.GET_CHAT_LIST,
});

export { getChatList }