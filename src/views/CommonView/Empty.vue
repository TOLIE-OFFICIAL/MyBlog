<!-- author: TOLIE -->
<!-- date: 2023-05-17 17:10:08 -->
<!-- description: 空白页面 没有header footer  -->
<template>
  <div class="layout-box">
    <div class="web-login-left">
      <RouterView />
    </div>
    <div class="web-login-right flex-column">
      <div class="web-login-right-title" :poem="poem">
        <div class="poem">{{ poem.content }}</div>
        <div class="writer">——{{ poem.from }}</div>
      </div>
      <div class="web-login-right-img"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchPoem } from "@/service";
import { poemSlice, setLocal, getLocal } from "@/utils";

type PoemData = {
  from: string;
  content: string;
  [propName: string]: any;
};

const poem = ref<PoemData>({
  from: (getLocal("from_who") as string) || "tolie",
  content: (getLocal("hitokoto") as string) || "慢一些，稳一些",
}); // 右侧每日一言

const requestPoem = async () => {
  const { data } = await fetchPoem({
    max_length: 12,
    min_length: 8,
    c: "d",
    encode: "json",
  });
  // console.log(data);
  if (data) {
    setLocal("from_who", data.from_who ? data.from_who : "匿名");
    setLocal("hitokoto", data.hitokoto);
  }
};

const init = function () {
  requestPoem();
};

onBeforeMount(() => {
  init();
});
</script>

<style scoped lang="less">
.layout-box {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .web-login-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: inherit;
  }
}
.web-login-right {
  width: 260px;
  height: inherit;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: #409eff;

  &-title {
    width: 200px;
    margin-bottom: 10px;
    color: var(--el-color-white);

    .poem {
      font-size: 12px;
    }

    .writer {
      margin-top: 16px;
      text-align: right;
      font-style: italic;
      font-size: 8px;
    }
  }

  &-img {
    width: 160px;
    height: 160px;
    background-image: url("@/assets/images/loginPage-2.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
</style>
