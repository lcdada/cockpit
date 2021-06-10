
// // //获取用户列表
// // // export const getUserList = params => { return request({ url: '/srp/mc/mc-cockpit!findCockpitMdPdate.action', method: 'get', params }) }
// // //增加用户
// // // export const addUser = data => { return request({ url: '你的接口地址', method: 'post', data }) }
// // //删除用户
// // // export const delUser = data => { return request({ url: '你的接口地址', method: 'post', data }) }
// // //修改用户信息
// // export const addUserInfo = data => {
// // 	return request({
// // 		url: '/srp/mc/mc-cockpit!findCockpitMdPdate.action',
// // 		 method: 'post', 
// // 		 data 
// // 		}) 
// // }
// // //查询用户详细信息
// // // export const getUserDetail = params => { return request({ url: '/srp/mc/mc-cockpit!findCockpitMdPdate.action', method: 'get', params }) }


// //src/api/common.js
// import request from '@/utils/request'

// /**
//  * POST 方法 与 GET方法  区别
//  *
//  * post==> data: obj
//  * get==>params: obj
//  *
//  */
// // 例如(post)：
//  export function updateBook(obj) {
//    return request({
//      url: 'mc/mc-cockpit!findCockpitMdPdate.action',      // url = base url + request url
//      method: 'post',
//      data: obj,    //----------------->>>区别
//    })
//  }
// // 例如(get)：
//  export function getBookList(obj) {
//    return request({
//      url: '/book/list',      // url = base url + request url
//      method: 'post',
//      params: obj,    //----------------->>>区别
//    })
// }

import http from '../utils/http.js'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = process.env.VUE_APP_BASE_URL
console.log(resquest)

// get请求
export default{
 // 	getListAPI(params){
 //    	return http.get(`${resquest}/srp/mc/mc-cockpit!findCockpitMdPdate.action`,params)
	// },
	// 预警信息主要影响单位,指标
	 postFormAPI(params){
    	return http.post(`${resquest}/srp/mc/mc-cockpit!findCockpitMdPdate.action`,params)
	},
	// 隐患播报
	 hiddenDangerBroadcast(params){
		return http.post(`${resquest}/srp/mc/mc-cockpit!findCockpitTenminutes.action`,params)
	},
	//金字塔 & 特别关注
	
	getPyramid(params){
		return http.post(`${resquest}/srp/mc/mc-cockpit!findCockpitData.action`,params)
	},
	
	// 整改率/闭环隐患
	rectificationRate(params){
		return http.post(`${resquest}/srp/mc/mc-cockpit!findCockpitPyramid.action`,params)
	}
}
