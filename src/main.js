import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'

import './config/ant-design'
import './config/element'
import './config/aplayer'

import './assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
