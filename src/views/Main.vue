<!-- author: TOLIE -->
<!-- date: 2023-05-04 21:22:14 -->
<!-- description:  主页-->
<template>
  <MainLayout>
    <template #header>
      <Header />
    </template>
    <template #main>
      <RouterView />
    </template>
    <template #footer>
      <el-footer> <Footer /></el-footer>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
// import { onMounted } from "vue";
import MainLayout from "@/layout/MainLayOut.vue";
</script>

<style scoped lang="less"></style>
