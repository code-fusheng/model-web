// 全局变量设置
const state = {
  categoryList: [] // 分类列表
}

const mutations = {
  SET_CATEGORY: (state, categoryList) => {
    state.categoryList = categoryList
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

