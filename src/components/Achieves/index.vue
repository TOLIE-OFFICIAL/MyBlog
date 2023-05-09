<!-- author: TOLIE -->
<!-- date: 2022-10-31 11:12:34 -->
<!-- description: 归档页面 -->
<script lang="ts" setup>
import { fetchAchieves } from "@/service";
import { formatDate } from "@/utils/common";

interface blogItem {
  _id: string;
  title: string;
  updateTime: string;
  author: string;
}
interface Res {
  list: blogItem[];
  total: number;
}
const pageSize = ref(6);
const currentPage = ref(1);
const loading = ref(false);

const articleInfo = reactive<Res>({
  list: [],
  total: 0,
});

const noMore = computed(() => {
  return currentPage.value * pageSize.value > articleInfo.total;
});
const disabled = computed(() => {
  return loading.value || noMore.value;
});
const init = async () => {
  const { data }: { data: Res } = await fetchAchieves({
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  });
  if (data && data.list.length > 0) {
    articleInfo.list = articleInfo.list.concat(data.list);
    articleInfo.total = data.total;
    loading.value = true;
    currentPage.value += 1;
  }
};
const load = () => {
  loading.value = false;
  init();
};
onBeforeMount(() => init());
</script>

<template>
  <el-timeline
    v-infinite-scroll="load"
    :infinite-scroll-delay="400"
    class="achieve"
  >
    <el-timeline-item
      v-for="{ _id, title, author, updateTime } in articleInfo.list"
      :timestamp="formatDate(updateTime)"
      :key="_id"
      placement="top"
    >
      <el-card>
        <h4>{{ title }}</h4>
        <p>{{ author }} updated {{ formatDate(updateTime) }}</p>
      </el-card>
    </el-timeline-item>
    <li class="info-loading" v-loading="!disabled" v-show="!disabled"></li>
    <!-- <li v-if="loading" class="infinite-list-otherItem">Loading..</li>  -->
    <li class="info-noMore" v-show="noMore">这里是世界的尽头～</li>
  </el-timeline>
</template>

<style scoped lang="less">
:deep(.el-timeline-item) {
  width: 50%;
}
.achieve {
  width: 520px;
  margin: 5px auto 0 auto;
}
.info {
  min-height: 32px;
  &-noMore {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
  }
}
</style>
