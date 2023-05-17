import { obj2query } from "@/utils/common/obj2query";
import { poemRequest } from "../request";

/**
 *  请求登录页的展示文字
 * @param ？？
 * @returns ？？？
 */
export function fetchPoem(data: ApiPeom.PoemRestriction) {
  // console.log(data);

  return poemRequest.post<ApiPeom.Poem>("/poemEveryDay", data)
}