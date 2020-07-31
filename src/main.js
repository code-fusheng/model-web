import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './config/element.js'
// import './config/ant-design'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(Antd)

import '@/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
