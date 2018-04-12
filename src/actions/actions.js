import types from './actionTypes';

export const sendMessage = (user, message, url) => ({
  type: types.SEND_MESSAGE,
  user,
  message,
  url,
});

export const logout = () => ({
  type: types.LOGOUT,
})

export const getUser = (user) => ({
  type: types.GET_USER,
  payload: user,
});

export const setUserName = (name) => ({
  type: types.SET_USERNAME,
  name
});

export const signin = (email, password) => ({
  type: types.SIGNIN,
  email,
  password,
});

export const signinFacebook = () => ({
  type: types.SIGNFACEBOOK
});

export const signinGoogle = () => ({
  type: types.SIGNGOOGLE
});

export const signup = (email, password) => ({
  type: types.SIGNUP,
  email,
  password
})
