import request from '@/utils/request'

//用户接受公告列表
export function pageList(pageNo, size) {
    return request({
        url: '/api/student/pageList',
        method: 'get',
        params: { pageNo: pageNo, size: size }
    })
}