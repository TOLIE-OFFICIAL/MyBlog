<template>
  <div class="exception">
    <div>
      <el-icon v-if="type === '403'" :size="400"><i-local-403 /></el-icon>
      <el-icon v-if="type === '404'" :size="400"><i-local-404 /></el-icon>
      <el-icon v-if="type === '500'" :size="400"><i-local-500 /></el-icon>
      <el-icon v-if="type === 'published'" :size="400"
        ><i-local-appreciation
      /></el-icon>
    </div>
    <div class="info" v-if="type === 'published'">
      <div class="info-title">《{{ title }}》</div>
      <div class="info-thanks">发布成功！有了你的分享，我们会变得更好！</div>
    </div>
    <router-link :to="routeHomePath" class="flex-center">
      <el-button type="primary">回到首页</el-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
// defineOptions({ name: "ExceptionBase" });

type ExceptionType = "403" | "404" | "500" | "published";

type Props = {
  type: ExceptionType;
  title: string;
};

defineProps<Props>();

const routeHomePath = "/";
</script>

<style scoped lang="less">
.exception {
  display: flex;
  width: 100%;
  height: calc(100vh - 26px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .info {
    width: 100%;
    text-align: center;
    &-title {
      margin-bottom: 4px;
      font-size: 8px;
      color: var(--el-text-color-regular);
    }
    &-thanks {
      margin-bottom: 6px;
      font-size: 6px;
      color: var(--el-color-info);
    }
  }
}
</style>
