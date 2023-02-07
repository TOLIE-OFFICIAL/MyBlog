import { createRequest } from "./request";

// 创建请求
export const mockRequest = createRequest({ baseURL: "/mock" });

export const blogRequest = createRequest({ baseURL: "/api" });

export const poemRequest = createRequest({ baseURL: "/poem" });

