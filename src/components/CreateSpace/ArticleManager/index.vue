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
            'filter-item-active': currentState == item.statue,
            'filter-item': true,
          }"
          @click="handleActive(item.statue)"
          :key="item.statue"
        >
          {{ item.title }}
        </li>
        <li class="empty"></li>
        <li class="filter-item-input">
          <el-input
            v-model="keyWord"
            @keyup.enter="handleSearchKey"
            placeholder="请输入标题关键字"
          >
            <template #suffix>
              <!-- <el-button @click="handleSearchKey">
                <template #icon>
                </template>
              </el-button> -->
              <el-icon class="filter-item-input-icon" @click="handleSearchKey"
                ><i-ep-Search />
              </el-icon>
            </template>
          </el-input>
        </li>
      </ul>
      <div class="article-manager-tabs-content">
        <div class="article-manager-tabs-content-list">
          <ArticleItem v-for="item in list" :item="item" :key="item._id">
            {{ item }}
          </ArticleItem>
        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :style="{ justifyContent: 'center' }"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
      />
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
const currentState = ref("");
const keyWord = ref("");
const pageSize = ref(9);
const currentPage = ref(1);
const total = ref(9);

const list = ref<BlogArticles.partArticle[]>();

const filterOptions = [
  { title: "全部", statue: "" },
  { title: "已发布", statue: "published" },
  { title: "审核中", statue: "checking" },
  { title: "未通过", statue: "rejected" },
];

const handleActive = (state: string) => {
  // console.log(state);
  currentState.value = state;
};

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleSearchKey = async () => {
  // console.log(keyWord);
  fetchArticles();
};

const fetchArticles = async () => {
  const {
    data,
  }: { data: { list: BlogArticles.partArticle[]; total: number } } =
    await fetchArticlesByStatus({
      status: currentState.value,
      pageSize: pageSize.value,
      currentPage: currentPage.value,
      keyWord: keyWord.value,
    });
  if (data) {
    list.value = data.list;
    total.value = data.total;
  }
};
// 监听
watch(currentPage, () => {
  fetchArticles();
});

// 初次请求数据，渲染页面
const init = () => {
  fetchArticles();
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
      display: flex;
      min-height: calc(100% - 46px);
      // overflow-y: scroll;
      // flex-direction: column;
      padding-left: 8px;
      // background-color: #86909c;

      &-list {
        // height: 100%;
        flex: 1;
        // position: absolute;
        // bottom: 2px;
      }
    }
  }
}
:deep(.el-tabs__header) {
  height: 18px;
  margin: 0;
  .el-tabs__nav-scroll {
    padding-left: 8px;
    height: 18px;
  }
  .el-tabs__nav {
    height: 18px;
    line-height: 18px;
  }
}
:deep(.el-tabs__content) {
  flex: 1;
}
:deep(.el-tabs__item) {
  height: 100%;
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
    &-icon {
      cursor: pointer;
    }
  }
  .empty {
    flex: 1;
  }
}
</style>
