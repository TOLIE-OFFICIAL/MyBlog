<!-- author: TOLIE -->
<!-- date: 2022-10-31 10:12:15 -->
<!-- description: 归档页面 -->
<template>
  <Nav>
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ title }}</h3>
    </el-carousel-item>
  </Nav>
  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
// import { onMounted } from "vue";
import Nav from "@/components/Nav.vue";
defineProps<{ title: string }>();
const activities = [
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
];
</script>

<style scoped lang="less">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
