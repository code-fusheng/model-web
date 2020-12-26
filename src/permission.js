import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import notification from 'ant-design-vue/es/notification'
import appConfig from './app.config'

NProgress.configure({ showSpinner: false }) // NProgress配置

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 设置页标题
  document.title = to.name === null ? appConfig.title : to.name + ' - ' + appConfig.title

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    const hasGetUserInfo = store.getters.name
    if (hasGetUserInfo) {
      next()
    } else {
      store
        .dispatch('user/getInfo')
        .then(res => {
          next()
        }).catch(() => {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试'
          })
          NProgress.done()
        })
    }
    next()
  } else {
    // 如果当前页面是登录的，则不会在每个钩子之后触发，因此请手动处理它
    next()
    NProgress.done()
    // document.getElementById('loginButton').click()
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
