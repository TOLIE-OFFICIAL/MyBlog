import { obj2query } from "@/enum/obj2query";
import { poemRequest } from "../request";

/**
 *  请求登录页的展示文字
 * @param ？？
 * @returns ？？？
 */
export function fetchPoem(data: ApiPeom.PoemRestriction) {
  // console.log(data);

  return poemRequest.post<ApiPeom.Poem>("/poem-every-day", data)
}