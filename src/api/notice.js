import request from '@/utils/request'

export function getNotice(){
    return request({
        url: '/api/noitce/queryNotice',
        method: 'get'
    })
}