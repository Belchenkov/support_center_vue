import Vue from 'vue'
import 'babel-polyfill';

import router from './router';
import AppLayout from './components/AppLayout.vue';
import './global-components';

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
})
