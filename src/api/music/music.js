import request from '@/utils/request'
var group_name = 'music'
export default {
  save(music) { // 添加
    return request({
      url: `/${group_name}/save`,
      method: 'post',
      data: music
    })
  },
  getList() { // 前台查询
    return request({
      url: `/${group_name}/getList`,
      method: 'get'
    })
  },
  getByPage(page) { // 多条件分页查询 - 查
    return request({
      url: `/${group_name}/getByPage`,
      method: 'post',
      data: page
    })
  },
  update(music) { // 更新
    return request({
      url: `/${group_name}/update`,
      method: 'put',
      data: music
    })
  },
  deleteById(id) { // 删除
    return request({
      url: `/${group_name}/deleteById/${id}`,
      method: 'delete'
    })
  },
  get(id) { // 根据id查询
    return request({
      url: `/${group_name}/get/${id}`,
      method: 'get'
    })
  },
  enableById(id) { // 启用
    return request({
      url: `/${group_name}/enable/${id}`,
      method: 'put'
    })
  },
  disableById(id) { // 添加
    return request({
      url: `/${group_name}/disable/${id}`,
      method: 'put'
    })
  }
}
