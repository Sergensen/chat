import { combineReducers } from 'redux';

import chats from './chats';

const reducer = combineReducers({
  chats,
});

export default reducer;
