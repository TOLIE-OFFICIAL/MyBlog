import { mockRequest } from "../request";

export function fetch404() {
  return mockRequest.post("/404");
}

export function fetchExampleData() {
  return mockRequest.get("/example-data");
}

export function fetchExampleNoData() {
  return mockRequest.get("/example-no-data");
}

//如果你想获取其他内容, 比如响应头, 你可以在声明api时进行配置
export function fetchExampleHeaders() {
  return mockRequest.get("/example-headers", { entries: ["data", "headers"] });
}
