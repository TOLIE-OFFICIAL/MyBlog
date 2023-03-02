import { blogRequest } from "../request";
import { obj2query } from "@/enum/obj2query"
// import type {Query} from "@/typings/api"

// /**
//  *  帐密登录
//  * @param username - 用户名
//  * @param password - 密码
//  * @returns Token
//  */
// export function fetchLogin(username: string, password: string) {
//   return blogRequest.post<ApiAuth.Token>("/login", { username, password });
// }

/**
 *  请求首屏要展示的文章
 * @param article - 文章信息
 * @returns ？？？
 */
export function fetchArticles(data: BlogArticles.Query) {
  // return blogRequest.get<BlogArticles.Article>("/home");
  return blogRequest.get("/blogPosts" + obj2query(data));
}

/**
 *  请求首屏要展示的文章
 * @param article - 文章信息
 * @returns ？？？
 */
export function createArticle(data: any) {
  return blogRequest.post("/blogPosts", data);
}
