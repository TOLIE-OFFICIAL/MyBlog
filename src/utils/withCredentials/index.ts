import axios from "axios";
// import { MessageBox, Message } from 'element-plus'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
import qs from "qs";

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});
// axios.defaults.withCredentials = true

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config?.headers['Authorization'] = getToken()
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  (response) => {
    const res = response.data;
    // if the custom code is not 200, it is judged as an error.
    if (res.status !== 200) {
      //   Message({
      //     message: res.message || 'Error',
      //     type: 'error',
      //     duration: 5 * 1000
      //   })

      //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //     // to re-login
      //     MessageBox.confirm(
      //       'You have been logged out, you can cancel to stay on this page, or log in again',
      //       'Confirm logout',
      //       {
      //         confirmButtonText: 'Re-Login',
      //         cancelButtonText: 'Cancel',
      //         type: 'warning'
      //       }
      //     ).then(() => {
      //       store.dispatch('user/resetToken').then(() => {
      //         location.reload()
      //       })
      //     })
      //   }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  (error) => {
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);
// 自定义get
export function get(url: string, params: any) {
  return service.get(url, {
    params, // get 请求时带的参数
    timeout: 10000,
    headers: {
      withCredentials: true,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
}

// 自定义post
export function post(url: string, data: any) {
  return service.post(url, qs.stringify(data), {
    timeout: 10000,
    headers: {
      withCredentials: true,
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
}

export default service;
