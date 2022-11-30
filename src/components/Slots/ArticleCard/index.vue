<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <el-icon :size="20" style="margin-right: 8px; vertical-align: bottom;">
          <i-ep-Edit />
        </el-icon>
        <span>{{ title }}</span>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang='ts'>
defineProps<{ title: string }>()

</script>
<style scoped lang='less'>
.box-card {
  border: none;

  .card-header {
    color: #666;
    font-size: 16px;
    font-weight: bold;
  }
}

.top-feature-list {
  width: 100%;
  height: 160px;
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
  }
}
</style>