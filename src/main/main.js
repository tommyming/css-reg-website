import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import eventMenu from '../vue/eventMenu.vue';
import header from '../vue/header.vue';
import addEventMsg from '../vue/addEventMsg.vue';
import footer from '../vue/footer.vue'
import  '../css/main.css';

Vue.use(VueAxios, axios);
Vue.component('headerx', header);
Vue.component('addEventMsg', addEventMsg);
Vue.component('eventMenu', eventMenu);
Vue.component('footerx', footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
