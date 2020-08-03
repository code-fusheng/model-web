import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Antd)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
