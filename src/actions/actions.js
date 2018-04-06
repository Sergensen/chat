import types from './actionTypes';

export const sendMessage = (user, message) => ({
  type: types.SEND_MESSAGE,
  user: user,
  message: message
});

export const typing = (user) => ({
  type: types.TYPING,
  user: user
})
