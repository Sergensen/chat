import types from '../actions/actionTypes';
import { auth, googleProvider, facebookProvider, database } from '../Firebase';

export default (state = {}, action = {}) => {
  const { email, password} = action;
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
    case types.CREATE_USER:
      const {uid, displayName, photoURL } = action.user;
      database.ref('users/' + uid).set({
        name: displayName,
        url: photoURL
      });
      return Object.assign({}, state);
    case types.WRITE_MESSAGE:
       const key = database.ref('messages').push().key;
       database.ref('messages/' + key).set({
         uid: action.id,
         message: action.message
       });
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
