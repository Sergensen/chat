import types from '../actions/actionTypes';
import { auth, googleProvider, facebookProvider } from '../Firebase';

export default (state = {}, action = {}) => {
  const { email, password } = action;
  switch (action.type) {
    case types.GET_USER:
      return Object.assign({}, state, {
        ...action.payload
      });
    case types.LOGOUT:
      auth.signOut();
      return Object.assign({});
    case types.SET_USERNAME:
      const user = auth.currentUser;
      user.updateProfile({
        displayName: action.name
      });
      return Object.assign({}, state);
    case types.SIGNIN:
      auth.signInWithEmailAndPassword(email, password);
      return Object.assign({}, state);
    case types.SIGNGOOGLE:
      auth.signInWithPopup(googleProvider);
      return Object.assign({}, state);
    case types.SIGNFACEBOOK:
      auth.signInWithPopup(facebookProvider);
      return Object.assign({}, state);
    case types.SIGNUP:
      auth.createUserWithEmailAndPassword(email, password);
      return Object.assign({}, state);
    default:
      return state;
  }
}
