<script setup lang="ts">
import "animate.css";
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useMainStore } from "@/store";

const mainStore = useMainStore();
// const flag = ref(true);
type scrollPosition = {
  scrollTop: number;
  scrollLeft: number;
};
const scroll = (scroll: scrollPosition) => {
  mainStore.scrollY = scroll.scrollTop;
};
const backTop = () => {
  console.log(window);

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
};
</script>

<template>
  <el-scrollbar
    max-height="100vh"
    @scroll="scroll"
    class="scrollBar"
    :noresize="true"
  >
    <div class="common-layout">
      <el-container>
        <el-header height="60px">
          <Header />
        </el-header>
        <el-main class="main">
          <RouterView />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
        <el-backtop target=".scrollBar > div" :right="80" :bottom="100">
          <el-icon><i-ep-ArrowUpBold /></el-icon>
        </el-backtop>
      </el-container>
    </div>
  </el-scrollbar>
</template>

<style scoped lang="less">
header {
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 0;
  z-index: 999;
  // background: rgba(255, 255, 255, 0.95);
  // box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
}

.main {
  /* width: 1000px; */
  margin-top: 60px;
  padding: 0;
  /* background: #1c0522; */
}
</style>
