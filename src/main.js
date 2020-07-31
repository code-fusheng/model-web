import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import './config/element.js'
import './config/ant-design'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
