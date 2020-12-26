// 全局变量设置
const state = {
  categoryList: [], // 分类列表
  messageCount: [] // 消息提示计数
}

const mutations = {
  SET_CATEGORY: (state, categoryList) => {
    state.categoryList = categoryList
  },
  SET_MESSAGE_COUNT: (state, messageCount) => {
    state.messageCount = messageCount
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

