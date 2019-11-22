import Vue from 'vue'
import App from './App.vue'

import Framework7 from 'framework7/framework7.esm.bundle.js';

import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
// Import F7 Styles
import 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';
import store from "./store/store.js";
Framework7.use(Framework7Vue)
import * as firebase from 'firebase'

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyBfd4mIJqjuwYVai39tf9bbBzTerGdv2KA",
  authDomain: "htqlcx.firebaseapp.com",
  databaseURL: "https://htqlcx.firebaseio.com",
  projectId: "htqlcx",
  storageBucket: "htqlcx.appspot.com",
  messagingSenderId: "1039388797015",
  appId: "1:1039388797015:web:80a2e0089db4baf1c51b12",
  measurementId: "G-SWSD7K3YF4"
};

firebase.initializeApp(firebaseConfig)
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
