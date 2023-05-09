<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<script setup lang="ts">
import { fetchTopArticles } from "@/service";

const router = useRouter();
defineProps<{ title: string }>();

interface PinnedTopItem {
  _id: string;
  title: string;
  summary: string;
  coverUrl: string;
}
const pinnedTopData = reactive<{ list: PinnedTopItem[] }>({
  list: [],
});

const handleClick = (id: string) => {
  router.push({ path: "/detail", query: { id: id } });
};
onBeforeMount(async () => {
  const { data }: { data: PinnedTopItem[] } = await fetchTopArticles();
  if (data) {
    pinnedTopData.list = data;
  }
});
</script>

<template>
  <ArticleCard :title="title">
    <el-row
      :gutter="20"
      justify="space-between"
      align="middle"
      class="top-feature-list"
    >
      <el-col
        :span="6"
        v-for="{ _id, title, summary,coverUrl } in pinnedTopData.list"
        :key="_id"
        @click="handleClick(_id)"
      >
        <div class="grid-content ep-bg-purple">
          <BlogCover
            :ifTop="true"
            :imageUrl="'http://image.tolie.site/'+coverUrl"
            :zoomFactor="1.2"
            :summary="summary"
            :title="title"
          ></BlogCover>
        </div>
      </el-col>
    </el-row>
  </ArticleCard>
</template>

<style scoped lang="less">
.top-feature-list {
  width: 520px;
  height: 100px;
  margin: 0 !important;

  & :deep(.el-col) {
    min-width: 33.3%;
    height: 100%;
  }
}

.grid-content {
  height: 100%;
  width: 100%;
}
</style>
