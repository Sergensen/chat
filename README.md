The src/Firebase.js have to look like this

import * as firebase from 'firebase';

const config = {
    apiKey: YOURAPIKEY,
    authDomain: YOURAUTHDOMAIN,
    databaseURL: YOURDATABASEURL,
    projectId: YOURPROJECTID,
    storageBucket: YOURSTORAGEBUCKET,
    messagingSenderId: YOURMESSAGINGSENDERID
  };
  
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
