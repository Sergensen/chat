import types from '../actions/actionTypes';

const initialState = {
  messages: [
    {
      user: "Tim!",
      message: 'This is a message'
    }
  ],
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
     case types.GET_TYPER:
       return Object.assign({}, state, {
          messages: [
            ...state.messages
          ],
          typing:action.data.user
        });
    default:
      return state;
  }
}
