import request from '@/utils/request'
var group_name = 'comment'
export default {
  save(comment) { // 添加
    return request({
      url: `/${group_name}/save`,
      method: 'post',
      data: comment
    })
  },
  deleteById(id) { // 删除
    return request({
      url: `/${group_name}/deleteById/${id}`,
      method: 'delete'
    })
  },
  getByPage(page) { // 多条件分页查询
    return request({
      url: `/${group_name}/getByPage`,
      method: 'post',
      data: page
    })
  }
}
