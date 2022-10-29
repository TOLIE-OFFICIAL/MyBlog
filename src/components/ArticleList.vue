<script lang="ts" setup>
import ArticleItem from '@/components/ArticleItem.vue'
import { ref } from 'vue'
const count = ref(0)
const load = () => { count.value += 2 }
// const data = reactive({})
</script>

<template>
  <el-row :gutter="20" justify="space-evenly">
    <el-col :span="6">
      <div class="grid-content ep-bg-purple">11</div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple">11</div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple">11</div>
    </el-col>
  </el-row>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item"><ArticleItem /></li>
  </ul>
</template>

<style scoped>
.el-col {
  text-align: center;
}

.infinite-list {
  height: 1200px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: var(--el-color-primary-light-9);
  margin: 30px 0;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
  margin-top: 10px;
}
</style>

