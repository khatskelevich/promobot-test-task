import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from '@/filter'
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters,
  render: h => h(App)
}).$mount('#app')
