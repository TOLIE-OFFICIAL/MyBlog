<script lang="ts" setup>
import { fetchArticles } from "@/service";

defineProps<{ title: string }>();

const ArticleCard = defineAsyncComponent(
  () => import("@/components/Slots/ArticleCard/index.vue")
);

type ArticleInfo = {
  articleInfoList: Array<any>;
  total: number;
};

const pageSize = ref(4);
const total = ref(0);
const loading = ref(false);
const articleInfo = reactive<ArticleInfo>({
  articleInfoList: [],
  total: 0,
});

const noMore = computed(() => pageSize.value >= articleInfo.total);
const disabled = computed(() => loading.value || noMore.value);
const load = () => {
  loading.value = true;
  init();
};
const init = async () => {
  // if(pageSize.value ==2){}
  const { data } = await fetchArticles({ pageSize: pageSize.value });
  pageSize.value += 2;
  loading.value = false;
  if (data) {
    // console.log("data", data); // 获取首页展示的文章信息
    articleInfo.total = data?.total ?? 0;
    articleInfo.articleInfoList = data?.list ?? [];
  }
};

onBeforeMount(() => {
  init();
});
</script>

<template>
  <ArticleCard :title="title">
    <!-- <div style="height: 1290px;overflow-y: auto;" > -->
    <el-scrollbar>
      <ul
        v-infinite-scroll="load"
        infinite-scroll-immediate="true"
        class="infinite-list"
        :infinite-scroll-disabled="disabled"
      >
        <li
          v-for="{
            author,
            content,
            createTime,
            priority,
            summary,
            tags,
            title,
            updateTime,
            _id,
          } in articleInfo.articleInfoList"
          :key="_id"
          class="infinite-list-item"
        >
          <el-card class="infinite-list-item-content" shadow="hover">
            <div class="infinite-list-item-content-left postInfo">
              <div class="postInfo-date">
                <el-icon style="vertical-align: bottom; font-size: 14px">
                  <i-ep-Timer />
                </el-icon>
                发布于 2022-08-13
              </div>
              <div class="postInfo-title">{{ title }}</div>
              <div class="postInfo-meta">
                <span class="postInfo-metahot">
                  <el-icon>
                    <i-ep-View />
                  </el-icon>
                  20 热度
                </span>
                <span class="postInfo-meta-commentsNum">
                  <el-icon>
                    <i-ep-ChatDotSquare />
                  </el-icon>
                  0 评论
                </span>
                <span class="postInfo-meta-tags">
                  <el-icon>
                    <i-ep-PriceTag />
                  </el-icon>
                  tools
                </span>
              </div>
              <p class="postInfo-summary">{{ decodeURI(summary) }}</p>
              <div class="postInfo-detail">
                <el-icon>
                  <i-ep-More />
                </el-icon>
              </div>
            </div>
            <router-link
              class="infinite-list-item-content-right"
              to="/login"
            ></router-link>
          </el-card>
        </li>
        <li v-if="loading" class="infinite-list-otherItem">Loading..</li>
        <li v-if="noMore" class="infinite-list-otherItem">No more</li>
      </ul>
      <!-- <p >.</p>
        <p v-if="noMore">No more</p> -->
    </el-scrollbar>
    <!-- </div> -->
  </ArticleCard>
</template>

<style scoped lang="less">
.infinite-list {
  height: 1290px;
  padding: 0;
  margin: 0;
  list-style: none;

  &-otherItem {
    margin: 8px 0;
    text-align: center;
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    margin: 30px 0 0 0;
    box-sizing: border-box;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.infinite-list-item-content {
  width: 100%;
  height: 100%;
  // background-color: aquamarine;

  & :deep(.el-card__body) {
    display: flex;
    padding: 0 !important;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  &-left {
    flex: 1;
  }

  &-right {
    display: block;
    width: 530px;
    height: inherit;
    background-image: url(@/assets/itemPic.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.postInfo {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // margin-top: 30px;
  // margin-left: 30px;
  margin: 30px 10px 0 30px;
  padding-right: 10px;
  text-align: left;

  &-date {
    font-size: 14px;
    color: #888;
  }

  &-title {
    margin: 18px 0;
    font-weight: bold;
    color: #504e4e;
  }

  &-summary {
    height: 69px;
    overflow: hidden;
    margin-bottom: 22px;
    font-size: 15px;
    color: #000000a8;
  }

  &-meta {
    margin-bottom: 18px;
    font-size: 14px;
    color: #888;

    &-commentsNum {
      margin: 10px;
    }
  }
}
</style>
