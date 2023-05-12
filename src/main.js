import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCszKIzMlWZGxm86w0tr2SGjxlVNxscAfg',
  authDomain: 'myfbproject-8c7dd.firebaseapp.com',
  databaseURL: 'https://myfbproject-8c7dd.firebaseio.com',
  projectId: 'myfbproject-8c7dd',
  storageBucket: 'myfbproject-8c7dd.appspot.com',
  messagingSenderId: '221664236548',
  appId: '1:221664236548:web:1a2d3d8b72a8251b455151',
  measurementId: 'G-G1DC1025J1'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
