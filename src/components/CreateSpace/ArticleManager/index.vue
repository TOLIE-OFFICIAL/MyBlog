<!-- author: TOLIE -->
<!-- date: 2023-04-22 19:17:35 -->
<!-- description: 创作者中心-文章管理页面 -->
<template>
  <el-tabs
    v-model="activeName"
    class="article-manager"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="文章"
      name="finished"
      class="article-manager-tabs article-manager-tabs-finished"
    >
      <ul class="filter">
        <li
          v-for="(item, index) in filterOptions"
          :class="{
            'filter-item-active': activeIndex == index,
            'filter-item': true,
          }"
          @click="handleActive(index)"
          :key="item"
        >
          {{ item }}
        </li>
        <li class="empty"></li>
        <li class="filter-item-input">
          <el-input v-model="input" placeholder="请输入标题关键字">
            <template #suffix>
              <el-icon><i-ep-Search /> </el-icon>
            </template>
          </el-input>
        </li>
      </ul>
      <div class="article-manager-tabs-content">
        <div class="article-manager-tabs-content-list">
          <ArticleItem v-for="item in list" :item="item" :key="item._id">{{
            item
          }}</ArticleItem>
        </div>
        <!-- <div class="article-manager-tabs-content-pagination">
          <div class="example-demonstration">
            When you have more than 7 pages
          </div>
          <el-pagination layout="prev, pager, next" :total="1000" />
        </div> -->
      </div>
    </el-tab-pane>

    <el-tab-pane
      label="草稿箱"
      name="unfinished"
      class="article-manager-tabs article-manager-tabs-unfinished"
    >
      Config
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
import { fetchArticlesByStatus } from "@/service";

const activeName = ref("finished");
const activeIndex = ref(0);
const input = ref("");

const filterOptions = ["全部", "已发布", "审核中", "未通过"];

const handleActive = (index: number) => {
  console.log(index);
  activeIndex.value = index;
};

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const list = ref<BlogArticles.partArticle[]>();

// onBeforeMount();
const init = async () => {
  const {
    data,
  }: { data: { list: BlogArticles.partArticle[]; total: number } } =
    await fetchArticlesByStatus("");
  if (data) {
    list.value = data.list;
  }

  // console.log(data);
  // console.log('list',list);
};

init();
</script>

<style scoped lang="less">
.article-manager {
  display: flex;
  flex-direction: column;
  height: 100%;
  // height: 44px;
  &-tabs {
    height: 100%;

    &-content {
      // position: relative;
      // display: flex;
      height: calc(100% - 22px);
      // flex-direction: column;
      padding-left: 8px;
      // background-color: #86909c;

      &-list {
        height: 100%;
        // flex: 1;
        // position: absolute;
        // bottom: 2px;
      }
    }
  }
}
:deep(.el-tabs__header) {
  height: 22px;
  margin: 0;
  .el-tabs__nav-scroll {
    padding-left: 8px;
    height: 22px;
  }
  .el-tabs__nav {
    height: 22px;
    line-height: 22px;
  }
}
:deep(.el-tabs__content) {
  flex: 1;
}
:deep(.el-tabs__item) {
  font-size: 6px;
  color: #86909c;
}

.filter {
  display: flex;
  height: 22px;
  align-items: center;

  &:first-child {
    border: none;
  }
  &-item {
    padding: 0 8px;
    border-left: 0.2px solid #e5e6eb;
    color: #86909c;
    cursor: pointer;
  }
  &-item-active {
    color: #409eff;
  }
  &-item-input {
    width: 100px;
  }
  .empty {
    flex: 1;
  }
}
</style>
