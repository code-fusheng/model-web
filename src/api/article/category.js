import request from '@/utils/request'
var group_name = 'category'
export default {
  save(category) { // 添加
    return request({
      url: `/${group_name}/save`,
      method: 'post',
      data: category
    })
  },
  deleteById(id) { // 逻辑删除
    return request({
      url: `/${group_name}/deleteById/${id}`,
      method: 'delete'
    })
  },
  update(category) { // 更新
    return request({
      url: `/${group_name}/update`,
      method: 'put',
      data: category
    })
  },
  getById(id) { // 根据id查询
    return request({
      url: `/${group_name}/getById/${id}`,
      method: 'get'
    })
  },
  getAll() { // 后台查询
    return request({
      url: `/${group_name}/getAll`,
      method: 'get'
    })
  },
  getList() { // 前台查询
    return request({
      url: `/${group_name}/getList`,
      method: 'get'
    })
  },
  getByPage(page) { // 多条件分页查询
    return request({
      url: `/${group_name}/getByPage`,
      method: 'post',
      data: page
    })
  },
  enable(id) { // 启用
    return request({
      url: `/${group_name}/enable/${id}`,
      method: 'put'
    })
  },
  disable(id) { // 弃用
    return request({
      url: `/${group_name}/disable/${id}`,
      method: 'put'
    })
  }
}
