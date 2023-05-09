<script setup lang="ts">
// import { ElScrollbar } from "element-plus";
// import 'element-plus/es/components/scrollbar/style/css'
// import { useMainStore } from "@/store";

// const mainStore = useMainStore();
// type scrollPosition = {
//   scrollTop: number;
//   scrollLeft: number;
// };
// const scroll = (scroll: scrollPosition) => {
//   mainStore.scrollY = scroll.scrollTop;
// };
</script>

<template>
  <div class="main-layout">
    <el-container>
      <el-header class="header">
        <slot name="header" />
      </el-header>
      <el-main class="main">
        <slot name="main" />
      </el-main>
      <slot name="footer" />

      <el-backtop
        target=".scrollBar > div"
        :right="80"
        :bottom="100"
        :visibility-height="400"
      >
        <el-icon><i-ep-ArrowUpBold /></el-icon>
      </el-backtop>
    </el-container>
  </div>
</template>

<style scoped lang="less">
header {
  position: fixed;
  height: 26px;
  top: 0px;
  width: 100%;
  padding: 0;
  z-index: 999;
  // background: rgba(255, 255, 255, 0.95);
  // box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
}

.main {
  /* width: 1000px; */
  margin-top: 26px;
  overflow: hidden;
  padding: 0;
  min-height: calc(100vh - 52px);
  /* background: #1c0522; */
}
footer {
  height: 26px;
}
</style>
