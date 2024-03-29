import './assets/main.css'
import './assets/sass/style.scss'

import { createApp } from 'vue'
import App from './App.vue'

import firebase from "firebase/compat/app";

import router from "./router";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const firebaseConfig = {
    apiKey: "AIzaSyA5qdxYGPGGeHwg9GmlBY3UNUxJ4SBrOyQ",
    authDomain: "workout-with-her.firebaseapp.com",
    projectId: "workout-with-her",
    storageBucket: "workout-with-her.appspot.com",
    messagingSenderId: "1073609877362",
    appId: "1:1073609877362:web:7bfc44d41ccdd6687e5feb",
    measurementId: "G-MJH6B0W7X2"
  };

firebase.initializeApp(firebaseConfig);

const app = createApp(App).use(vuetify);

app.use(router);

app.mount('#app')
