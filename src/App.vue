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
// 捕获错误
onErrorCaptured((err, instance, info) => {
  console.log("[errorCaptured]", err, instance, info);
  return false; // 终止传播
});
</script>

<template>
  <el-config-provider>
    <ElementProvider>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Suspense>
            <!-- 主要内容 -->
            <el-scrollbar height="100vh" @scroll="scroll" class="scrollBar" :noresize="true">
              <component :is="Component" />
            </el-scrollbar>

            <!-- 加载中状态 -->
            <template #fallback>
              <Loading />
            </template>
          </Suspense>
        </template>
      </RouterView>
    </ElementProvider>
  </el-config-provider>
</template>