// import { noCredentials } from "@/utils";

import axios from "axios";
type poemReq = {
  max_length: number;
  c: string;
  encode: string;
};
export function getPoem(params: poemReq) {
  console.log(params,11)
  return axios.get("https://v1.hitokoto.cn", {params});
}