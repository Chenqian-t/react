import { combineReducers } from 'redux';

import count from './count';
import chatList from './chatList';
import friendsList from './friendsList';
import user from './user';

export default combineReducers({
    count, chatList, friendsList, user
})