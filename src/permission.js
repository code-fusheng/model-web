import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
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
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        store
          .dispatch('user/getInfo')
          .then(res => {
            next()
          }).catch(() => {
            Message.error('Has Error')
            NProgress.done()
          })
      }
    }
    next()
  } else {
    /* has no token*/
    // in the free login whitelist, go directly
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
