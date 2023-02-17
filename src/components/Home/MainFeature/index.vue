<script lang="ts" setup>
const ArticleCard = defineAsyncComponent(
  () => import("@/components/Slots/ArticleCard/index.vue")
);
const count = ref(4);
const loading = ref(false);
const noMore = computed(() => count.value >= 10);
const disabled = computed(() => loading.value || noMore.value);
const load = () => {
  loading.value = true;
  setTimeout(() => {
    count.value += 2;
    loading.value = false;
  }, 2000);
};
defineProps<{ title: string }>();
</script>

<template>
  <ArticleCard :title="title">
    <!-- <div style="height: 1290px;overflow-y: auto;" > -->
      <el-scrollbar>
        <ul
          v-infinite-scroll="load"
          infinite-scroll-immediate="true"
          class="infinite-list"
          :infinite-scroll-disabled="disabled"
        >
          <li v-for="i in count" :key="i" class="infinite-list-item">
            <ArticleItem />
          </li>
          <li v-if="loading" class="infinite-list-otherItem">Loading..</li>
          <li v-if="noMore" class="infinite-list-otherItem">No more</li>
        </ul>
        <!-- <p >.</p>
        <p v-if="noMore">No more</p> -->
      </el-scrollbar>
    <!-- </div> -->
  </ArticleCard>
</template>

<style scoped lang="less">
.infinite-list {
  height: 1290px;
  padding: 0;
  margin: 0;
  list-style: none;
  &-otherItem {
    margin: 8px 0;
    text-align: center;
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    margin: 30px 0 0 0;
    box-sizing: border-box;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
