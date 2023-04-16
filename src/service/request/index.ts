import { createRequest } from "./request";

// 创建请求
export const mockRequest = createRequest({ baseURL: "/mock" });

export const blogRequest = createRequest({ baseURL: "/api" });

// 登陆页面的每日一言
export const poemRequest = createRequest({ baseURL: "/api" });

// 有关smms图床
export const imgRequest = createRequest({
  baseURL: "/img",
  // // 请求头
  // headers: {
  //   'Authorization': ""
  // }
}, {
  codeField: "code", // ??
  dataField: "data",
  msgField: "message",
  successCode: "success", // ??
},
);


// {
//   "success": true,
//   "code": "success",
//   "message": "Get API token success.",
//   "data": {
//     "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
//   },
//   "RequestId": "8DCED45B-5E9F-43B1-90C6-29D562F250D5"
// }
