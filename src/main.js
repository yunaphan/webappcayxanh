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


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
