import types from '../actions/actionTypes';

const initialState = {
  messages: [],
  typing : ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.RECEIVE_MESSAGES:
      return Object.assign({}, state, {
         messages: [
           ...state.messages,
           {
             user: action.data.user,
             message: action.data.message
           }
         ]
       });
    default:
      return state;
  }
}
