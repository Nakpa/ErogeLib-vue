/* eslint-disable */ 
//第一步：实例化axios对象，并设置 1.请求地址；2.超时时间；3.设置请求头数据格式 
const axios = require('axios'); // 创建axios对象 
import qs from 'qs' 
axios.defaults.baseURL = 'http://127.0.0.1:1919'; // vue请求后端地址 
axios.defaults.timeout = 60000; // 多久超时
axios.defaults.withCredentials = true; // 跨域访问需要发送cookie 时一定要加axios.defaults.withCredentials = true;

/*** 设置请求传递数据的格式（看服务器要求的格式） 
* x-www-form-urlencoded
 * 默认提交表单
 * 把数据对象序列化成 表单数据  
*/
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
 // axios.defaults.transformRequest = data => qs.stringify(data);
 /**

* 设置默认提交 json
* 把数据对象序列化成 json 字符串 
*/
axios.defaults.headers['Content-Type'] = 'application/json'; // 设置默认提 交 json 
// 把数据对象 序列化成 json 字符串
// axios.defaults.transformRequest = data => JSON.stringify(data); 
var postHeader = 'application/json';
var getHeader = 'application/x-www-form-urlencoded'
var fileHeader = 'multipart/form-data'


// 第二步：对请求拦截器，和响应拦截器进行封装 
/**
* 请求拦截器: 发送请求前需要调用这个函数 
1.当没有登录时，直接跳转到登录页 
2.请求发送前把token获取，设置到header中 
*/

axios.interceptors.request.use(config => {
     // 从localStorage中获取token
     let token = localStorage.getItem('token'); 
    // 如果有token, 就把token设置到请求头中Authorization字段中
     token && (config.headers.Authorization = token); 
    return config; 
}, error => {
     return Promise.reject(error); 
});


/**
 * 响应拦截器：当后端返回数据给vue时会调用这个函数
 1.没次返回403错误时，跳转到login 
 */ 
axios.interceptors.response.use(response => { 
    // 当响应码是 2xx 的情况, 进入这里 
    // debugger
    return response.data;
 }, error => {
     // 当响应码不是 2xx 的情况, 进入这里
    //  debugger
     return error
 });

//第三步：使用上面的axios对象，对get请求和post请求进行封装
 /**
* get方法，对应get请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
 export function get(url, params) { 
    console.log(url, params , ' ---------- url, params')
    return new Promise((resolve, reject) => {
     axios.get(url, params, {'Content-Type': getHeader}).then(res => {             
        resolve(res.data.ResultObj) 
     }).catch(err => {
         resolve (err.data) 
    }) 
  }) 
}

/**
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
**/ 
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params),  {'Content-Type': postHeader}).then((res) => { 
        resolve(res.data)
        }).catch((err) => {
        // debugger 
        reject(err.data) 
    }) 
})}

/**
 * post方法，对应post请求 - 针对文件格式
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
**/ 
export function filePost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params),  {'Content-Type': fileHeader}).then((res) => { 
        resolve(res.data)
        }).catch((err) => {
        // debugger 
        reject(err.data) 
    }) 
})}

export default axios; //一定要导出函数
                 
