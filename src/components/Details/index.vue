<!-- author: TOLIE -->
<!-- date: 2022-12-14 16:45:06 -->
<!-- description: blog详细内容页面 -->
<template>
  <md-editor v-model="text" theme="light" preview-only />
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('# Hello Editor');
</script>

<style scoped lang='less'>
.md-editor {
  padding: 0 8px;
  border-left: 1px solid var(--el-menu-border-color);
  border-right: 1px solid var(--el-menu-border-color);
  border-radius: 6px;

}
</style>