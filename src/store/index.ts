import Vue from 'vue';
import Vuex from 'vuex';
import AmenitiesListModule from '@/store/modules/AmenitiesListModule';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AmenitiesListModule,
  },
});
