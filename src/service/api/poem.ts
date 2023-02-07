import { poemRequest } from "../request";

/**
 *  请求登录页的展示文字
 * @param ？？
 * @returns ？？？
 */
export function fetchPoem() {
  return poemRequest.post<ApiPeom.Poem>("")
}