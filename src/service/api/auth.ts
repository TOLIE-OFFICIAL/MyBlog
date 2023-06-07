import { blogRequest } from "../request";

/**
 *  帐密登录
 * @param username - 用户名
 * @param password - 密码
 * @returns Token
 */
export function fetchLogin(formData: { email: string, password: string, code: string }): Promise<Res.response> {
  return blogRequest.post("/users/login", formData);
}
export function sendMail(email: string) {
  return blogRequest.post("/users/sendMail", { email });
}
export function fetchSignUp(data: ApiAuth.SignUpForm) {
  return blogRequest.post("/users", data);
}



/**
 *  请求首屏要展示的文章
 * @param article - 文章信息
 * @returns ？？？
 */
// export function fetchArticles() {
//   return blogRequest.get<BlogArticles.Article>("/home");
// }
// mockRequest.post<ApiAuth.Token>("/login", { username, password }, {});
// mockRequest.get<ApiAuth.Token>("/login", { params: {} });
