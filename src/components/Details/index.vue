<!-- author: TOLIE -->
<!-- date: 2022-12-14 16:45:06 -->
<!-- description: blog详细内容页面 -->
<template>
  <div class="content">
    <md-editor
      v-model="state.content"
      :editor-id="state.id"
      ref="editorRef"
      :theme="(state.theme as Themes)"
      preview-theme="cyanosis"
      preview-only
    />
  </div>
  <Post-Tags :tags="state.tags" />
  <Comment />
  <Toc :id="state.id" :theme="state.theme" :content="state.content" />
</template>

<script lang="ts" setup>
import Comment from "./Comment/index.vue";
import { getOneArticle } from "@/service";
import MdEditor, { type Themes } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
// import type { ExposeParam } from 'md-editor-v3';

// const editorRef = ref<ExposeParam>();

const route = useRoute();

const state = reactive({
  id: "",
  theme: "light",
  content: "",
  tags: [""],
});
const id = route.query.id as string;

// 仅预览模式中，整页滚动时，设置为document.documentElement。
const scrollElement = document.documentElement;

onBeforeMount(async () => {
  const { data }: { data: BlogArticles.Article } = await getOneArticle(id);
  // console.log(data)
  state.content = decodeURI(data.content);
  state.id = decodeURI(data._id);
  state.tags = data.tags ?? [];
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
  // border-bottom: 1px dashed var(--el-menu-border-color);
  // border-radius: 6px;
}
#blog-content-preview-wrapper {
  position: absolute;
}
/* .md-editor-catalog {
  width: 400px;
} */
</style>
