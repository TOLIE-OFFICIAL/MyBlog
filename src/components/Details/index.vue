<!-- author: TOLIE -->
<!-- date: 2022-12-14 16:45:06 -->
<!-- description: blog详细内容页面 -->
<template>
  <div class="content">
    <md-editor
      v-model="state.text"
      :editor-id="state.id"
      ref="editorRef"
      :theme="(state.theme as Themes)"
      preview-theme="cyanosis"
      preview-only
    />
    <md-catalog
      :editor-id="state.id"
      :scroll-element="'#blog-content-preview-wrapper'"
      :theme="state.theme as Themes"
    />
  </div>
</template>

<script lang="ts" setup>
import MdEditor, { type Themes } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
// import type { ExposeParam } from 'md-editor-v3';

// const editorRef = ref<ExposeParam>();

const MdCatalog = MdEditor.MdCatalog;

const state = reactive({
  id: "blog-content",
  theme: "light",
  text: decodeURI("###%20%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4%0A%0A%E4%B8%8D%E6%98%AF%E6%89%80%E6%9C%89%E7%9A%84%E6%93%8D%E4%BD%9C%E9%83%BD%E8%A6%81%E7%94%A8%E8%99%9A%E6%8B%9FDOM%E6%9D%A5%E8%BF%9B%E8%A1%8C%E6%93%8D%E4%BD%9C%EF%BC%8C%E8%A6%81%E8%AE%A4%E8%AF%86%E5%88%B0%E8%99%9A%E6%8B%9FDOM%E7%9A%84%E7%9C%9F%E5%AE%9E%E7%9B%AE%E7%9A%84%E4%B8%8D%E6%98%AF%E8%A6%81%E7%BB%91%E5%AE%9A%E6%89%80%E6%9C%89%E7%9A%84%E6%95%B0%E6%8D%AE%EF%BC%8C%E5%8E%BB%E6%9B%BF%E4%BB%A3DOM%E6%93%8D%E4%BD%9C%E3%80%82%E7%AE%80%E5%8D%95%E7%9A%84DOM%E6%93%8D%E4%BD%9C%EF%BC%8C%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8JS/TS%E6%93%8D%E4%BD%9C%E4%BC%9A%E6%AF%94%E7%BB%8F%E8%BF%87Vue%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%95%88%E7%8E%87%E6%9B%B4%E9%AB%98%EF%BC%9B%0A%0A%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4%E5%8F%AF%E4%BB%A5%E8%8E%B7%E5%8F%96%E5%B8%A6%E6%9C%89%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4%E7%9A%84DOM%E5%85%83%E7%B4%A0%EF%BC%8C%E4%BB%8E%E8%80%8C%E5%AE%9E%E7%8E%B0DOM%E6%93%8D%E4%BD%9C%0A%0A%60%60%60html%0A%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%20%20123%0A%20%20%20%20%3C/p%3E%0A%3C/div%3E%0A%0A%3Cscript%3E%0A%20%20%20%20div.innerHTML%20=%20'%3Cp%20class=title%22%22%3E11231441%3C/p%3E'//%20%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E5%B0%B1%E6%9B%B4%E9%80%82%E5%90%88%E4%BD%BF%E7%94%A8vue%E8%BF%9B%E8%A1%8C%E6%93%8D%E4%BD%9C%0A%20%20%20%20p.innerText%20=%20'111111'%20//%E8%BF%99%E7%A7%8D%E6%88%96%E8%AE%B8%E5%B0%B1%E6%9B%B4%E9%80%82%E5%90%88%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E6%93%8D%E4%BD%9CDOM%0A%3C/script%3E%0A%60%60%60"),
});

// const scrollElement = document.documentElement;

// onMounted(() => {
//   editorRef.value?.toggleCatalog(true);
//   editorRef.value?.on('preview', (status) => console.log(status));
//   // editorRef.value?.on('catalog', console.log)
//   // console.log(editorRef.value);

//   // editorRef.value?.on('catalog', console.log)
// });

</script>

<style scoped lang="less">
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.md-editor {
  position: relative;
  padding: 0 8px;
  border-left: 1px solid var(--el-menu-border-color);
  border-right: 1px solid var(--el-menu-border-color);
  border-radius: 6px;
}
#blog-content-preview-wrapper{
  position: absolute;
}
/* .md-editor-catalog {
  width: 400px;
} */
</style>
