<!-- author: TOLIE -->
<!-- date: 2023-04-21 11:51:55 -->
<!-- description: 二次封装目录组件 -->
<template>
  <transition
    v-show="mainStore.scrollY > 100"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div
      class="toc"
      :style="{
        right: '80px',
        bottom: '160px',
        width: '40px',
        height: '40px',
        lineHeight: '40px',
      }"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    >
      <el-icon
        :style="{
          width: '20px',
          height: '20px',
        }"
      >
        <i-ep-Operation
          :style="{
            width: '20px',
            height: '20px',
          }"
        />
      </el-icon>
      <md-catalog
        v-show="ifShow"
        class="toc-catalog"
        :editor-id="state.id"
        :scroll-element="scrollElement"
        :theme="state.theme as Themes"
      >
      </md-catalog></div
  ></transition>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
import MdEditor, { type Themes } from "md-editor-v3";

const MdCatalog = MdEditor.MdCatalog;
const mainStore = useMainStore();

// 仅预览模式中，整页滚动时，设置为document.documentElement。
const scrollElement = document.documentElement;

const ifShow = ref(false);

const handleMouseenter = () => {
  ifShow.value = true;
};
const handleMouseleave = () => {
  ifShow.value = false;
};

const state = defineProps<{
  id: string;
  content: string;
  theme: string;
}>();

// console.log(state);
</script>

<style scoped lang="less">
.toc {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
  color: #409eff;
  box-shadow: var(--el-box-shadow-lighter);

  &:hover {
    background-color: #f2f6fc;
  }

  &-catalog {
    position: absolute;
    width: 140px;
    height: 100px;
    padding: 8px;
    bottom: 0;
    right: 0;
    background-color: #fff;
    border-radius: 4px;
    /* border: 1px solid #999; */
    box-shadow: var(--el-box-shadow-lighter);
    /* z-index: 9999; */
  }
}
</style>
