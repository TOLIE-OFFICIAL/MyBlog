import request from "@/service";
import { useRequest } from "@/hooks";
import type { PoemReq } from "./types";
export const getPoem = (data: PoemReq) => {
  return request<PoemReq>({
    url: "https://v1.hitokoto.cn",
    method: "GET",
    data,
  });
};
export const getHomeData = () => {
  return request<PoemReq>({
    url: "./data.json",
    method: "GET",
  });
};
// export const getLogo = () => {
//   console.log(111);

//   return request({
//     url: 'https://smms.app/image/f5vjiHKwVDTpX7U',
//     method: 'GET',
//   })
// }
// export const useGetAddr = (data: IGetParams) => {
//   return useRequest<IGetParams>(getAddrs, data)
// }
