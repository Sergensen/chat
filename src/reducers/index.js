import { combineReducers } from 'redux';

import chats from './chats';
import user from './user';

const reducer = combineReducers({
  chats,
  user,
});

export default reducer;
