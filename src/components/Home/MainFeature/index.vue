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
                <el-icon class="postInfo-date-icon">
                  <i-ep-Timer />
                </el-icon>
                发布于 {{ formatDate(updateTime) }}
              </div>
              <div class="postInfo-title">{{ title }}</div>
              <div class="postInfo-meta">
                <span class="postInfo-metahot">
                  <el-icon class="postInfo-meta-icon">
                    <i-ep-View />
                  </el-icon>
                  20 热度
                </span>
                <span class="postInfo-meta-commentsNum">
                  <el-icon class="postInfo-meta-icon">
                    <i-ep-ChatDotSquare />
                  </el-icon>
                  0 评论
                </span>
                <span class="postInfo-meta-tags">
                  <el-icon class="postInfo-meta-icon">
                    <i-ep-PriceTag />
                  </el-icon>
                  {{ tags.join(",") }}
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

<script lang="ts" setup>
import moment from "moment";
import { fetchArticles } from "@/service";

defineProps<{ title: string }>();

// const ArticleCard = defineAsyncComponent(
//   () => import("@/components/Slots/ArticleCard/index.vue")
// );

type ArticleInfo = {
  articleInfoList: Array<any>;
  total: number;
};

const pageSize = ref(4);
const currentPage = ref(1);

const loading = ref(false);
const articleInfo = reactive<ArticleInfo>({
  articleInfoList: [],
  total: 0,
});

const load = () => {
  loading.value = true;
  init();
};

const formatDate = (time: string) => {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
};

const init = async () => {
  // if(pageSize.value ==2){}
  const { data } = await fetchArticles({
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  });
  currentPage.value += 1;
  loading.value = false;
  if (data) {
    // console.log("data", data); // 获取首页展示的文章信息
    articleInfo.total = data?.total ?? 0;
    articleInfo.articleInfoList = articleInfo.articleInfoList.concat(
      data?.list ?? []
    );
  }
};

const noMore = computed(
  () => currentPage.value * pageSize.value > articleInfo.total
);
const disabled = computed(() => loading.value || noMore.value);

init();

// onBeforeMount(() => {
//   init();
// });
</script>
<style scoped lang="less">
.infinite-list {
  height: 600px;
  padding: 0;
  margin: 0;
  list-style: none;

  &-otherItem {
    margin: 8px 0;
    font-size: 8px;
    text-align: center;
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    margin: 10px 0 0 0;
    box-sizing: border-box;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.infinite-list-item {
  &-content {
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
      width: 210px;
      height: inherit;
      background-image: url(@/assets/itemPic.jpg);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}

.postInfo {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // margin-top: 30px;
  // margin-left: 30px;
  margin: 10px 3px 0 10px;
  padding-right: 10px;
  text-align: left;

  &-date {
    font-size: 8px;
    color: #888;
    &-icon {
      vertical-align: middle;
      font-size: 8px;
    }
  }

  &-title {
    margin: 10px 0;
    font-size: 8px;
    font-weight: bold;
    color: #504e4e;
  }

  &-summary {
    height: 36px;
    overflow: hidden;
    margin-bottom: 18px;
    font-size: 8px;
    color: #000000a8;
  }

  &-meta {
    margin-bottom: 10px;
    font-size: 8px;
    color: #888;

    &-icon {
      vertical-align: middle;
      font-size: 8px;
    }
    &-commentsNum {
      margin: 10px;
    }
  }
}
</style>
