<!-- author: TOLIE -->
<!-- date: 2023-04-24 19:57:03 -->
<!-- description: 文章列表 列表项 -->
<template>
  <div class="list-item">
    <div class="list-item-header">
      <div class="list-item-header-title">{{ item.title }}</div>
      <div
        class="list-item-header-more"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        <el-icon><i-ep-MoreFilled /></el-icon>
        <transition
          v-show="ifPopup"
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <div class="list-item-header-more-popup">
            <div
              class="list-item-header-more-popup-item"
              @click="handleEdit(item._id)"
            >
              编辑
            </div>
            <div
              class="list-item-header-more-popup-item"
              @click="handleDel(item._id)"
            >
              删除
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="list-item-content">
      <div class="list-item-content-update">
        {{ formatDate(item.updateTime) }}
      </div>
      <div class="list-item-content-item list-item-content-showed">111展现</div>
      <div class="list-item-content-item list-item-content-readed">22阅读</div>
      <div class="list-item-content-item list-item-content-like">3点赞</div>
      <div class="list-item-content-item list-item-content-comment">4评论</div>
      <div class="list-item-content-item list-item-content-collect">5收藏</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/common";

interface Props {
  _id: string;
  title: string;
  updateTime: string;
}

const router = useRouter();
const { item } = defineProps<{
  item: Props;
}>();

const ifPopup = ref(false);

const handleMouseenter = () => {
  ifPopup.value = true;
};
const handleMouseleave = () => {
  ifPopup.value = false;
};
const handleEdit = (id: string) => {
  // console.log("edit", id);
  router.push({ path: "/edit", query: { id: id } });
};
const handleDel = (id: string) => {
  console.log("del", id);
};
</script>

<style scoped lang="less">
.list-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 32px;
  padding: 6px 0;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-more {
      position: relative;
      margin-right: 4px;
      & .el-icon:hover {
        background-color: var(--el-menu-item-hover-fill);
        cursor: pointer;
      }

      &-popup {
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-shadow: var(--el-box-shadow-light);
        height: 24px;
        width: 20px;
        border-radius: 2px;
        top: 100%;
        right: 0;
        z-index: 9;
        &-item {
          width: 100%;
          cursor: pointer;
          text-align: center;

          &:hover {
            // background-color: var(--el-menu-item-hover-fill);
            color: var(--el-menu-hover-text-color);
          }
        }
      }
    }
  }
  &-content {
    display: flex;
    font-size: 5px;
    color: #86909c;

    // .dot {
    //   padding: 0 3px;
    // }
    &-showed {
      padding-left: 5px !important;
    }
    &-item + &-item::before {
      content: "·";
      padding: 0 3px;
    }
    &-update {
      padding-right: 5px !important;
      border-right: 0.2px solid #e5e6eb;
    }
  }
}
</style>
