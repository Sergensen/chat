You have to install all dependencies and add a Firebase.js file to your src/ folder.

1. run "npm install" in the root folder
2. add the following code as a Firebase.js to the src/ folder.
3. fill the config with your firebase data
4. run "npm start" in the root folder

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
