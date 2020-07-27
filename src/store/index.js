import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {} // 登录中的用户
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  getters: {
    getUser() {
      return store.state.user
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    persistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})

export default store
