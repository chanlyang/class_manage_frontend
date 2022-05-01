import request from '@/utils/request'


//今日疫情
export function todayInfo() {
    return request({
        url: '/api/epidemic/todayInfo',
        method: 'get',
    })
}


//发布疫情字段
export function publishTodayEpidemic(data) {
    return request({
        url: '/api/epidemic/publishTodayEpidemic',
        method: 'post',
        data: data
    })
}


//今日异常疫情
export function todayException() {
    return request({
        url: '/api/epidemic/todayException',
        method: 'get',
    })
}


//每日填报
export function fillDaily(data) {
    return request({
        url: '/api/epidemic/fillDaily',
        method: 'get',
        data: data
    })
}


//查询每日填报，可以条件查询
export function queryFillDaily(pageNo, size, healthCode, isOutSchool, noFill) {
    return request({
        url: '/api/epidemic/queryFillDaily',
        method: 'get',
        params: { pageNo: pageNo, size: size, healthCode: healthCode, isOutSchool: isOutSchool, noFill: noFill }
    })
}