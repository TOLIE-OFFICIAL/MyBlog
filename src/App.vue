<template>
  <el-config-provider>
    <ElementProvider>
      <RouterView v-slot="{ Component }">
        <!-- 主要内容 -->
        <template v-if="Component">
          <el-scrollbar
            max-height="100vh"
            @scroll="scroll"
            class="scrollBar"
            :noresize="false"
          >
            <component :is="Component" />
          </el-scrollbar>
        </template>
        <!-- 加载中状态 -->
        <template v-else>
          <el-scrollbar max-height="100vh" class="scrollBar" :noresize="false">
            <template #default>
              <Loading />
            </template>
          </el-scrollbar>
        </template>
      </RouterView>
    </ElementProvider>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();
type scrollPosition = {
  scrollTop: number;
  scrollLeft: number;
};
const scroll = (scroll: scrollPosition) => {
  mainStore.scrollY = scroll.scrollTop;
};
// 根据捕获的错误跳转到错误页面
// https://v3.cn.vuejs.org/guide/migration/error-handling.html#%E5%85%A8%E5%B1%80%E9%94%99%E8%AF%AF%E6%8D%95%E8%8E%B7%E5%99%A8

onErrorCaptured((err, instance, info) => {
  console.log("[errorCaptured]", err, instance, info);
  // console.log(err);
  // console.log(instance);
  // console.log(info);
  return false; // 终止传播
});
</script>
