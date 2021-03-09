import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from '@/filter'
import PortalVue from 'portal-vue'
import VueSplide from '@splidejs/vue-splide';

Vue.use(PortalVue)
Vue.use(VueSplide);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters,
  render: h => h(App)
}).$mount('#app')
