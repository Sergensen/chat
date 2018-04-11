import types from './actionTypes';

export const sendMessage = (user, message) => ({
  type: types.SEND_MESSAGE,
  user: user,
  message: message
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


export const signinGoogle = () => ({
  type: types.SIGNGOOGLE
});

export const signup = (email, password) => ({
  type: types.SIGNUP,
  email,
  password
})
