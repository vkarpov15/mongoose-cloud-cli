'use strict';

const firebase = require('firebase');

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAScpDOrlR_1wQLa1Dv95SZsHEljq6cOEw',
  authDomain: 'mongoosecloud-19b35.firebaseapp.com',
  databaseURL: 'https://mongoosecloud-19b35.firebaseio.com',
  projectId: 'mongoosecloud-19b35',
  storageBucket: 'mongoosecloud-19b35.appspot.com',
  messagingSenderId: '461196001890',
  appId: '1:461196001890:web:361fd82e239ff1d85b073b'
});

module.exports = firebase;