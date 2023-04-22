import { blogRequest } from "../request";
import { obj2query } from "@/enum/obj2query"
import type { CompressOptions } from "qiniu-js/esm/utils/compress";
import * as qiniu from "qiniu-js";
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
 * @param article - 分页1请求的参数
 * @returns 按时间顺序，返回四篇文章
 */
export function fetchArticles(data: BlogArticles.Query) {
  // return blogRequest.get<BlogArticles.Article>("/home");
  return blogRequest.get("/blogPosts" + obj2query(data));
}
/**
 * 上传前压缩图片
 */
export async function compressImage(file: File, options: CompressOptions) {
  const data = await qiniu.compressImage(file, options)
  // console.log('compress')
  return data;
}

/**
 * 上传图片到七牛云
 */
export async function getQnToken() {
  const token = await blogRequest.get("/blogPosts/oss")
  return token;
}

// /**
//  * 取消上传图片到七牛云
//  */

// export function cancleUpload(subscription:Subscription){
//   subscription.unsubscribe()
// }

/**
 *  上传博客内容
 * @param article - 文章信息
 * @returns ？？？
 */
export function createArticle(data: any) {
  return blogRequest.post("/blogPosts", data);
}

/**
 *  获取文章详情
 *  @param id
 *  @ruturn 特定文章的详细信息
 */
export function getOneArticle(id: string) {
  return blogRequest.get("/blogPosts/" + id);
}