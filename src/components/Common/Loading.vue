<template>
  <!-- <div class="flex-center flex-col wh-full">
    <div class="flex">
      <el-icon :size="64"><IconLogo /></el-icon>
      <h2 class="pl-5px c-#1890ff text-32px font-bold">Clover管理系统</h2>
    </div> -->
  <div class="loading">
    <Vue3Lottie
      :animation-data="AstronautJSON"
      :speed="1.5"
      :height="250"
      :width="250"
    />
  </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import AstronautJSON from "@/assets/animation/loading.json";

// defineOptions({ name: "Loading" });
</script>

<style scoped lang="less">
.loading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
