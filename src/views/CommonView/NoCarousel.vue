<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<script setup lang="ts">
import { useMainStore } from "@/store";
import MainLayout from "@/layout/MainLayOut.vue";

const mainStore = useMainStore();
// let autoplay = ref(true)
</script>

<template>
  <MainLayout>
    <template #header>
      <Header />
    </template>
    <template #main>
      <RouterView />
    </template>
  </MainLayout>
</template>

<style scoped lang="less">
.banner {
  :deep(&-text) {
    height: 340px;
    user-select: none;
    opacity: 0.75;
    // line-height: 340px;
    margin-top: 60px;
    // text-align: center;
    // font-size: 32px;
    // color: var(--el-color-white);
  }
}
// .content {
//   width: 520px;
//   // height: calc(100% - 400px);
//   margin: 5px auto;
//   margin-bottom: 0;
//   // padding: 18px 0;
// }
</style>
