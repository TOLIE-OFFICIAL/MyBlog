import axios from "axios";
import service from "@/utils/withCredentials";
// import type { AxiosRequestConfig, AxiosResponse } from "axios";

const Axios = axios.create({
  // 下面两个属性，用来设置，请求失败或者超时，自动重新请求的次数和间隙时间
  // retry: 5, // 请求次数
  // retryInterval: 5000, // 求期间隙
  timeout: 20000, // 超时时间
});

// axios.defaults.retry = 1
// axios.defaults.retryDelay = 1000
// axios.defaults.timeout = 60000

// 请求前拦截
Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 请求后返回数据拦截
Axios.interceptors.response.use(
  (res) => {
    return res;
  },
  function axiosRetryInterceptor(res) {
    const config = res.config;
    // 如果配置不存在或重试属性未设置，抛出promise错误
    if (!config || !config.retry) return Promise.reject(res);
    // 设置一个变量记录重新请求的次数
    config.retryCount = config.retryCount || 0;
    // 检查重新请求的次数是否超过我们设定的请求次数
    if (config.retryCount >= config.retry) {
      return Promise.reject(res);
    }
    // 重新请求的次数自增
    config.retryCount += 1;
    // 创建新的Promise来处理重新请求的间隙
    const back = new Promise<void>(function (resolve): void {
      console.log("接口" + config.url + "请求超时，重新请求");
      setTimeout(function () {
        resolve();
      }, config.retryInterval || 1);
    });
    // 返回axios的实体，重试请求
    return back.then(function () {
      return Axios(config);
    });
  }
);
// 自定义get
export function get(url: string, params: any) {
  console.log(params);
  return Axios.get(url, {
    params: { max_length: 10, c: "d", encode: "json" }, // get 请求时带的参数
    // timeout: 10000
  });
}
export default Axios;
