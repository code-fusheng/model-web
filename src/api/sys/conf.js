import request from '@/utils/request'
var group_name = 'conf'
export default {
  getAboutMe() {
    return request({
      url: `/${group_name}/getAboutMe`,
      method: 'get'
    })
  }
}
