import request from '@/utils/request'

// 查询分类树结构
export function getList (query) {
  return request({
    url: '/api/getList',
    method: 'get',
    params: query
  })
}
