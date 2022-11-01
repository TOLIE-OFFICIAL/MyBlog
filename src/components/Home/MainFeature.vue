<script lang="ts" setup>
import ArticleItem from './ArticleItem.vue'
import ArticleCard from '../Slots/ArticleCard/index.vue'
import { ref } from 'vue'
const count = ref(0)
const load = () => { count.value += 2 }
defineProps<{ title: string }>()
</script>

<template>
  <ArticleCard :title="title">
    <div style="height: 1290px;">
      <el-scrollbar>
        <ul v-infinite-scroll="load" infinite-scroll-immediate="true" class="infinite-list">
          <!-- <ul class="infinite-list" style="overflow: auto"> -->
          <li v-for="i in count" :key="i" class="infinite-list-item">
            <ArticleItem />
          </li>
        </ul>
      </el-scrollbar>
    </div>
    <!-- <el-scrollbar style="height: 80%"> -->

    <!-- </el-scrollbar> -->
  </ArticleCard>
</template>


<style scoped lang="less">
.infinite-list {
  height: 1290px;
  padding: 0;
  margin: 0;
  list-style: none;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    margin: 30px 0;
    box-sizing: border-box;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>

