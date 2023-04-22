<!-- author: TOLIE -->
<!-- date: 2023-04-21 19:56:30 -->
<!-- description: 详情页 文章标签 -->
<template>
  <ul class="blog-tags">
    <li class="blog-tags-item" v-for="item in props.tags" :key="item">
      <el-icon><i-ep-CollectionTag /></el-icon>
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
// import { onMounted } from "vue";
const props = defineProps<{
  tags:string[]
}>();
// console.log(props.tags)
// const tags = ["linux", "javaScript", "Java"];
</script>

<style scoped lang="less">
.blog-tags {
  display: flex;
  height: 16px;
  align-items: center;

  &-item {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    // line-height: 16px;
    background-color: antiquewhite;
    padding: 2px 6px;
    margin-left: 6px;
    font-size: 6px;
    font-weight: bold;
    border-radius: 8px;

    &:first-child {
      background-color: rgba(255, 78, 106, 0.15);
      color: #ff4e6a;
    }
    &:nth-child(2) {
      background-color: rgba(255, 118, 30, 0.15);
      color: #ff761e;
    }
    &:nth-child(3) {
      background-color: rgba(255, 185, 0, 0.15);
      color: #ffb900;
    }
    &:last-child {
      background-color: rgba(51, 213, 122, 0.15);
      color: #33d57a;
    }
  }
}
</style>
