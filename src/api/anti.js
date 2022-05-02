import request from '@/utils/request'

//每日学习的反诈信息
export function info() {
    return request({
        url: '/api/fraud/info',
        method: 'get',
    })
}

//反诈信息打卡
export function punch(anitId) {
    return request({
        url: '/api/fraud/punch',
        method: 'get',
        params: { anitId: anitId }
    })
}

//发布反诈信息
export function publish(data) {
    return request({
        url: '/api/fraud/publish',
        method: 'post',
        data: data
    })
}

//反诈信息列表
export function pageList(pageNo, size) {
    return request({
        url: '/api/fraud/pageList',
        method: 'get',
        params: { pageNo: pageNo, size: size }
    })
}

//学生打卡列表
export function studentPunch(pageNo, size, antiId) {
    return request({
        url: '/api/fraud/studentPunch',
        method: 'get',
        params: { pageNo: pageNo, size: size, antiId: antiId }
    })
}