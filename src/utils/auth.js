import Cookies from 'js-cookie'

const uToken = 'u_token'
const uRoleId = 'u_role'
const uUser = 'u_user'
const uImg = 'u_img'

// 获取Token
export function getToken() {
    return Cookies.get(uToken);
}

// 设置Token，1天,与后端同步
export function setToken(token) {
    return Cookies.set(uToken, token, { expires: 1 })
}

// 删除Token
export function removeToken() {
    return Cookies.remove(uToken)
}

// 获取角色
export function getRoleId() {
    return Cookies.get(uRoleId);
}

// 设置角色，1天,与后端同步
export function setRoleId(roleId) {
    return Cookies.set(uRoleId, roleId, { expires: 1 })
}

// 删除角色
export function removeRoleId() {
    return Cookies.remove(uRoleId)
}

// 获取用户信息
export function getUser() {
    return Cookies.get(uUser);
}

// 设置用户信息，1天,与后端同步
export function setUser(user) {
    return Cookies.set(uUser, user, { expires: 1 })
}

// 删除用户信息
export function removeUser() {
    return Cookies.remove(uUser)
}

// 获取用户头像
export function getUserImg() {
    return Cookies.get(uImg);
}

// 设置用户头像，1天,与后端同步
export function setUserImg(img) {
    return Cookies.set(uImg, img, { expires: 1 })
}

// 删除用户头像
export function removeUserImg() {
    return Cookies.remove(uImg)
}

export function removeAll() {
    return Cookies.Cookies.removeAll()
}



