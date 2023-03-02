<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<script setup lang="ts">
import ArticleCard from "../../Slots/ArticleCard/index.vue";
defineProps<{ title: string }>();
</script>

<template>
  <ArticleCard :title="title">
    <el-row
      :gutter="20"
      class="top-feature-list"
    >
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <!-- <img src="@/assets/兔耳.jpg" alt="background" /> -->
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <!-- <img src="@/assets/兔耳.jpg" alt="background" /> -->
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <!-- <img src="@/assets/兔耳.jpg" alt="background" /> -->
        </div>
      </el-col>
    </el-row>
  </ArticleCard>
</template>

<style scoped lang="less">
.top-feature-list {
  width: 750px;
  height: 160px;
  margin: 0 !important;

  & :deep(.el-col) {
    min-width: calc(710px / 3);
    height: 100%;
  }
}

.grid-content {
  height: 100%;
  width: 100%;
  background: url(@/assets/兔耳.jpg) no-repeat center;
  background-size: contain;
  // img {
  //   height: 100%;
  //   // width: 100%;
  // }
}
</style>
