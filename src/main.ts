import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDQre5KY7FmTaAoKJ8_1Vx34Abg6SER6uU",
  authDomain: "peppy-2bf81.firebaseapp.com",
  databaseURL: "https://peppy-2bf81.firebaseio.com",
  projectId: "peppy-2bf81",
  storageBucket: "peppy-2bf81.appspot.com",
  messagingSenderId: "376362470753",
  appId: "1:376362470753:web:40667eec67bf6db2e98920",
  measurementId: "G-RJMHTPPQZ3"
});

export const db = firebase.firestore();
export const functions = firebase.functions();
export const auth = firebase.auth();

// require('./watcher.js');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
