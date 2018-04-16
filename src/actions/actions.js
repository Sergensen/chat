import types from './actionTypes';

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

export const writeMessage = (id, message) => ({
  type: types.WRITE_MESSAGE,
  id,
  message
});

export const createUser = (user) => ({
  type: types.CREATE_USER,
  user
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
