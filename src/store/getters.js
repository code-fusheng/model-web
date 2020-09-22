const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  header: state => state.user.header,
  name: state => state.user.name,
  userId: state => state.user.userId,
  roleId: state => state.user.roleId,
  messageCount: state => state.global.messageCount,
  categoryList: state => state.global.categoryList
}
export default getters
