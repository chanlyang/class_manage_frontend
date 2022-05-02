import request from '@/utils/request'

//请假列表
export function pageList(data) {
    return request({
        url: '/api/leave/apply',
        method: 'post',
        data: data
    })
}

//我的请假信息
export function myApply(pageNo, size) {
    return request({
        url: '/api/leave/myApply',
        method: 'get',
        params: { pageNo: pageNo, size: size }
    })
}

//请假列表
export function pageList(pageNo, size) {
    return request({
        url: '/api/leave/pageList',
        method: 'get',
        params: { pageNo: pageNo, size: size }
    })
}

//请假审批
export function approval(status, leaveId) {
    return request({
        url: '/api/leave/approval',
        method: 'get',
        params: { status: status, leaveId: leaveId }
    })
}

