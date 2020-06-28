import request from '@/utils/request'

// 查询用例接口
export function getList (query) {
  return request({
    url: '/api/getList',
    method: 'get',
    params: query
  })
}

// 新建用例接口
export function addCase (data) {
  return request({
    url: '/api/addCase',
    method: 'post',
    data: data
  })
}
