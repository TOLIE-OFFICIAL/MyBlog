<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<template>
  <el-carousel
    indicator-position="none"
    class="banner"
    height="400px"
    :autoplay="mainStore.scrollY <= 400"
  >
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center" class="banner-text">文章归档</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="main">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useMainStore } from "@/store";

const mainStore = useMainStore();
// let autoplay = ref(true)

// defineProps<{ title: string }>();
</script>

<style scoped lang="less">
.banner {
  :deep(&-text) {
    // height: 100%;
    user-select: none;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
    text-align: center;
    font-size: 32px;
    color: var(--el-color-white);
  }
}
.main {
  width: 1000px;
  margin: 18px auto;
  // padding: 18px 0;
}
.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
  background-image: url(@/assets/images/timg-4.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
