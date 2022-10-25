import { noCredentials } from "@/utils";
const poemParams = reactive({
    max_length: 10,
    c: "d",
    encode: "json",
});
export function getPoem() {
    return noCredentials("https://v1.hitokoto.cn", {});
}
