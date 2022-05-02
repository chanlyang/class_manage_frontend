import request from '@/utils/request'

// 通知列表
export function queryPageByAccept(pageNo, size) {
    return request({
        url: '/api/notice/queryPageByAccept',
        method: 'get',
        params: { pageNo: pageNo, size: size }
    })
}
//接受通知
export function acceptNotice(noitceId) {
    return request({
        url: '/api/notice/acceptNotice',
        method: 'get',
        params: {
            noitceId: noitceId
        }
    })
}
//发布通知
export function publicNotice(data) {
    return request({
        url: '/api/notice/publicNotice',
        method: 'post',
        data: data
    })
}

//通知列表
export function pageNotice(pageNo, size) {
    return request({
        url: '/api/notice/pageNotice',
        method: 'get',
        params: { pageNo: pageNo, size: size }
    })
}
//用户接受公告列表
export function acceptUser(pageNo, size, noticeId) {
    return request({
        url: '/api/notice/acceptUser',
        method: 'get',
        params: { pageNo: pageNo, size: size, noticeId: noticeId }
    })
}