<!-- author: TOLIE -->
<!-- date: 2022-10-27 17:35:47 -->
<!-- description:  -->
<template>
  <el-card class="box-card" shadow="hover">
    <div class="box-card-left postInfo">
      <div class="postInfo-date">
        <el-icon style="vertical-align: bottom;font-size: 14px;">
          <i-ep-Timer />
        </el-icon>
        发布于 2022-08-13
      </div>
      <div class="postInfo-title">i3及renger常用快捷键记录</div>
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
      <p class="postInfo-summary">i3 平铺式桌面管理器 i3 官方地址：https://i3wm.org i3 官方文档：https://i3wm.org/docs/原生 i3 快捷键
      </p>
      <div class="postInfo-detail">
        <el-icon>
          <i-ep-More />
        </el-icon>
      </div>
    </div>
    <router-link class="box-card-right" to="/login">

    </router-link>
  </el-card>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
// import SubTitle from './SubTitle.vue';
import router from '@/router';
// import router-link from 'router'
</script>

<style  scoped lang="less">
.box-card {
  width: 100%;
  height: 100%;
  background-color: aquamarine;

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
    color: #504E4E;
  }

  &-summary {
    height: 69px;
    overflow: hidden;
    margin-bottom: 22px;
    font-size: 15px;
    color: #000000A8;
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
