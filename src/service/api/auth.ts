import { blogRequest } from "../request";

/**
 *  帐密登录
 * @param username - 用户名
 * @param password - 密码
 * @returns Token
 */
export function fetchLogin(username: string, password: string) {
  return blogRequest.post<ApiAuth.Token>("/login", { username, password });
}
/**
 *  请求首屏要展示的文章
 * @param article - 文章信息
 * @returns ？？？
 */
export function fetchArticles() {
  return blogRequest.get<BlogArticles.Article>("/home");
}
// mockRequest.post<ApiAuth.Token>("/login", { username, password }, {});
// mockRequest.get<ApiAuth.Token>("/login", { params: {} });