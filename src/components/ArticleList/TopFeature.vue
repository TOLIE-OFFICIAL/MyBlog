<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<script setup lang='ts'>
import ArticleCard from './ArticleCard/index.vue'
defineProps<{ title: string }>()

</script>

<template>
  <ArticleCard :title="title">
    <el-row :gutter="20" justify="space-between" align="middle" class="top-feature-list">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <img src="@/assets/兔耳.jpg" alt="background">
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <img src="@/assets/兔耳.jpg" alt="background">
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple">
          <img src="@/assets/兔耳.jpg" alt="background">
        </div>
      </el-col>
    </el-row>
  </ArticleCard>
</template>


<style scoped lang='less'>
.top-feature-list {
  width: 100%;
  height: 180px;
  margin: 0 !important;

  & :deep(.el-col) {
    max-width: 33.3%;
    height: 100%;
  }
}

.grid-content {
  height: 100%;
  img {
    height: 100%;
    // width: 100%;
  }
}
</style>