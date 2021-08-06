import { friendsListType } from './actionsType';

const getFriendsList = () => ({
    type: friendsListType.GET_FRIENDS_LIST,
});

export { getFriendsList }