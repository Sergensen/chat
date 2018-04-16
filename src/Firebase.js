import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCRQdzNdhhNOUdsp7gAMBa1haCqa5Blor0",
    authDomain: "papi-8f17e.firebaseapp.com",
    databaseURL: "https://papi-8f17e.firebaseio.com",
    projectId: "papi-8f17e",
    storageBucket: "papi-8f17e.appspot.com",
    messagingSenderId: "363819133336"
  };
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
