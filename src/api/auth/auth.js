import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
  return request({
    url: '/admin/user/register',
    method: 'post',
    data: userDTO
  })
}

// 上传头像
export function uploadImg(data) {
  return request({
    url: '/admin/user/uploadImg',
    method: 'post',
    data: data
  })
}

// 前台用户登录
export function login(data) {
  return request({
    url: '/admin/user/login',
    method: 'post',
    data
  })
}
// 登录后获取前台用户信息
export function getUserInfo() {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}
// 前台用户注销
export function logout() {
  return request({
    url: '/admin/user/logout',
    method: 'get'
  })
}

// 修改用户信息
export function updateInfo(data) {
  return request({
    url: '/admin/user/updateInfo',
    method: 'post',
    data: data
  })
}