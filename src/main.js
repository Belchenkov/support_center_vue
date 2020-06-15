import Vue from 'vue'
import 'babel-polyfill';

import router from './router';
import state from './state';
import './global-components';

// Components
import AppLayout from './components/AppLayout.vue';

// Plugins
import VueFetch, { $fetch } from './plugins/fetch';
import VueState from './plugins/state';
Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/',
});
Vue.use(VueState, state);

async function main () {
  // Get user info
  try {
    state.user = await $fetch('user');
  } catch (e) {
    console.warn(e);
  }

  // Launch app
  new Vue({
    el: '#app',
    data: state,
    router,
    render: h => h(AppLayout),
  })
}

main();
