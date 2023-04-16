import { blogRequest } from "../request";
import { obj2query } from "@/enum/obj2query"
import * as qiniu from "qiniu-js";
import type { UploadRequestOptions } from "element-plus";
import type { CompressOptions } from "qiniu-js/esm/utils/compress";
// import type {Subscription} from "qiniu-js/esm/utils/observable"
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
 * 上传前压缩图片
 */
export async function compressImage(file: File, options: CompressOptions) {
  const data = await qiniu.compressImage(file, options)
  return data;
}

/**
 * 上传图片到七牛云
 */
export async function qnUpload(file: any, onProgress: Function, imgName: string) {
  // 获取上传token
  blogRequest.get("/blogPosts/oss").then(res => {
    const token: string = res?.data;
    // let key = `images/${new Date().getTime()}${imgName}`;

    const putExtra = {
      fname: imgName
    };

    const Config = {
      useCdnDomain: true,
      region: qiniu.region.z2,
      checkByMD5: true,
      chunkSize: 1
    }

    const observable = qiniu.upload(file, null, token, putExtra, Config)

    // 上传开始
    const subscription = observable.subscribe({
      next(res) {
        console.log('next');
        
        if (onProgress) {
          file["percent"] = Number(res.total.percent.toFixed(2));
          onProgress(file);
        }
      },
      error(err) {
        // reject(err);
        console.log(err);

      },
      complete(data: BlogImgs.uploadRes) {
        // resolve(domain + date!.key);
        // let { hash, key } = data;
        console.log(data);
        // window.$message?.success("上传成功！");
        subscription.unsubscribe() // 上传取消
        // console.log(subscription);
        return data;
      },
    });

  })
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
