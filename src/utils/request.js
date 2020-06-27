import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:8080', // url = base url + request url
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res.result
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
