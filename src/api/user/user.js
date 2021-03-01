import request from '@/utils/request'

export function login(data) {
  return request({
    url: `/login?username=${data.username}&password=${data.password}`,
    // url: `/login?username=admin&password=123456`,
    method: 'post',
    transformResponse: [function(data) {
      return JSON.parse(data)
    }]
  })
}

export function register(data) {
  return request({
    url: `/user/register`,
    method: 'post',
    data: data
  })
}

export function getInfo(params) {
  return request({
    url: '/admin/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function smsLogin(data) {
  return request({
    url: '/authentication/mobile?' + `mobile=` + data.mobile + '&smsCode=' + data.smsCode,
    method: 'post',
    transformResponse: [function(data) {
      return JSON.parse(data)
    }]
  })
}

export function getSmsCaptcha(parameter) {
  return request({
    url: '/code/sms',
    method: 'post',
    data: parameter
  })
}

export function SmsCaptcha(mobile) {
  return request({
    url: '/code/sms?mobile=' + mobile + '',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
