/****   request.js   ****/
// 导入axios
import axios from 'axios'
import qs from 'qs'
// 使用element-ui Message做消息提醒
import { Message} from 'element-ui';
import { formatTime } from './index.js'
//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口--这里注意后面会讲
  baseURL: process.env.VUE_APP_BASE_URL,
  // 超时时间 单位是ms，这里设置了10s的超时时间
  timeout: 10 * 1000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
	// console.log(config)
	// console.log(getQueryString('Authorization'))
	 config.data = qs.stringify(config.data)
  //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
	config.headers['Accept'] = '*/*'
	config.headers['X-Requested-With'] = 'XMLHttpRequest'
	// config.headers['Request-From'] = 'mobile'
   const token = localStorage.getItem('token');//这里取token之前，你肯定需要先拿到token,存一下
   if(token){
      // config.params = {'Authorization':token} //如果要求携带在参数中
      config.headers.Authorization= token; //如果要求携带在请求头中
    }
	// console.log(config)
  return config
}, error => {
  Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use(response => {
  //接收到响应数据并成功后的一些共有的处理，关闭loading等
  // console.log(response)
  return response
}, error => {
	// console.log(error)
   /***** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
   
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message = '连接服务器失败'
  }

  Message.error(error.message)
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})
//4.导入文件
export default service
