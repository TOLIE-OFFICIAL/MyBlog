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
      <!-- <el-carousel
        indicator-position="none"
        class="banner"
        height="400px"
        :autoplay="mainStore.scrollY <= 400"
      >
        <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
      </el-carousel> -->
      <!-- <div class="content"> -->
        <RouterView />
      <!-- </div> -->
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
