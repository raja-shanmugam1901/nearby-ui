import Vue from 'vue';
import App from './App.vue';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import VModal from 'vue-js-modal';

Vue.use(VModal);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
