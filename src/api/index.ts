import request from '@/service'
import { useRequest } from '@/hooks'
import type { PoemReq } from './types'
export const getPoem = (data: PoemReq) => {
  return request<PoemReq>({
    url: 'https://v1.hitokoto.cn',
    method: 'GET',
    data,
  })
}
// export const useGetAddr = (data: IGetParams) => {
//   return useRequest<IGetParams>(getAddrs, data)
// }
