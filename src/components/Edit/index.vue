<template>
  <div class="cover" theme="light">
    <md-editor v-model="mainStore.blogContent_md" :sanitize="sanitize" @onSave="onSave" />
    <transition v-show="mainStore.blogFormShow" enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight">
      <BlogInfo class="info" />
    </transition>
    <div class="collapse">
      <el-icon v-show="mainStore.blogFormShow" @click="mainStore.blogFormShow = !mainStore.blogFormShow">
        <i-ep-ArrowRightBold />
      </el-icon>
      <el-icon v-show="!mainStore.blogFormShow" @click="mainStore.blogFormShow = !mainStore.blogFormShow">
        <i-ep-ArrowLeftBold />
      </el-icon>
    </div>
  </div>

</template>

<script setup lang="ts">
import MdEditor from 'md-editor-v3';
import sanitizeHtml from 'sanitize-html';
import 'md-editor-v3/lib/style.css';
import { useMainStore } from "@/store";
// import {RouterLink, RouterView} from "vue-router";

const mainStore = useMainStore();

let show = ref(true);

const onSave = (v: string, h: Promise<string>) => {
  // console.log(v, h);

  h.then((html) => {
    // 转换成了html，将html上传到数据库保存
    mainStore.blogContent_html = html;
    console.log(html);
  });
};

// const print = ()=>{
//   console.log(text.value)
// }
const sanitize = (html: string) => {
  return sanitizeHtml(html);
};
</script>

<style lang="less" scoped>
.cover {
  position: relative;
  height: calc(100vh - 120px);
  margin-top:60px;

  .md-editor {
    height: 100%;
    border: none;
  }

  .info {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 24px 24px 0 24px;
    height: 280px;
    margin-top: -140px;
    border: 1px solid var(--el-border-color);
    border-radius: 6px;
    right: 0;
    top: 50%;
    box-shadow: 1px 0px 1px 1px var(--el-box-shadow-dark);
    //transform: translateY(-50%);
  }

  .collapse {
    position: fixed;
    height: 40px;
    width: 16px;
    top: 50%;
    right: 0;
    border: 1px solid transparent;
    //transform: translate(0, -50%);
    margin-top: -20px;
    line-height: 40px;
    border-radius: 4px;
    z-index: 99;
    cursor: pointer;

    &:hover {
      border-left-color: 1px solid var(--el-border-color);
      border-bottom-color: 1px solid var(--el-border-color);
      border-top-color: 1px solid var(--el-border-color);
      background-color: var(--el-backtop-hover-bg-color);
      color: var(--el-menu-active-color);
    }
  }
}
</style>