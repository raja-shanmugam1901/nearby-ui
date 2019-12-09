import Vue from 'vue';
import VueRouter from 'vue-router';
import LooTypes from '@/components/LooTypes.vue';
import Alert from '@/components/Alert.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'loo',
    component: LooTypes,
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
