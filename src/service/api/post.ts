import { blogRequest } from "../request";
import { obj2query } from "@/utils/common/obj2query"
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
 * @param data - 分页请求的参数
 * @returns 按时间顺序，返回四篇文章
 */
export function fetchArticles(data: BlogArticles.Query) {
  // return blogRequest.get<BlogArticles.Article>("/home");
  return blogRequest.get("/blogPosts" + obj2query(data));
}
/**
 *  请求首屏要展示的置顶文章
 * @param null
 * @returns 按更新时间顺序倒序，返回3篇置顶文章
 */
export function fetchTopArticles() {
  // return blogRequest.get<BlogArticles.Article>("/home");
  return blogRequest.get("/blogPosts/tops");
}
/**
 *  请求归档页展示的所有文章数据
 * @param data - 分页请求的参数
 * @returns 文章部分信息
 */
export function fetchAchieves(data: BlogArticles.Query) {
  // return blogRequest.get<BlogArticles.Article>("/home");
  return blogRequest.get("/blogPosts/achieves" + obj2query(data));
}

/**
 *  根据不同状态 请求文章
 * @param status - 
 * @returns 按时间顺序，文章
 */
export function fetchArticlesByStatus(status: string) {
  // return blogRequest.get<BlogArticles.Article>("/home");
  return blogRequest.get("/blogPosts/status/" + status);
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
 * @returns 新建文章的id
 */
export function createArticle(data: BlogArticles.formData) {
  return blogRequest.post("/blogPosts", data);
}

/**
 *  更新博客内容
 * @param article - 文章信息
 * @returns ？？？
 */
export function updateArticle(id: string, data: BlogArticles.formData) {
  return blogRequest.patch("/blogPosts/" + id, data);
}

/**
 *  获取文章详情
 *  @param id
 *  @ruturn 特定文章的详细信息
 */
export function getOneArticle(id: string) {
  return blogRequest.get("/blogPosts/" + id);
}
/**
 *  新建置顶文章
 *  @param updatetime
 *  @ruturn 新建置顶文章的id
 */
export function createPinnedTopArticle(data: BlogArticles.formData) {
  return blogRequest.post("/blogPosts/pinnedTop", data);
}