<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
// const flag = ref(true);
type scrollPosition = {
  scrollTop: number
  scrollLeft: number
}
const scroll = (scroll: scrollPosition) => {
  // console.log(scroll);
  mainStore.scrollY = scroll.scrollTop
}
</script>

<template>
  <el-scrollbar max-height="100vh" @scroll="scroll">
    <div class="common-layout">
      <el-container>
        <transition enter-active-class="animate__animated animate__fadeInDown"
          :style="`display:${mainStore.scrollY > 200 ? 'block' : 'none'}`">
          <img id="backTop" alt="back to Top" src="@/assets/images/scroll.png" />
        </transition>
        <!-- <el-header height="60px" :style="{background:flag?'linear-gradient(#2b1055,#7597de)':'rgba(255, 255, 255, 0.95)'}"> -->
        <el-header height="60px">
          <Header />
        </el-header>
        <el-main class="main">
          <RouterView />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
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

#backTop {
  height: 80vh;
  position: fixed;
  top: 0;
  right: 100px;
  z-index: 1000;
}

.main {
  /* width: 1000px; */
  /* margin: 0 auto;  */
  padding: 0;
  /* background: #1c0522; */
}
</style>
