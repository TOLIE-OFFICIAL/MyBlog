<!-- author: TOLIE -->
<!-- date: 2023-04-22 16:36:13 -->
<!-- description: 创作者页面 -->
<template>
  <div class="create-space">
    <el-row class="create-space-sideMenu">
      <el-button @click="handleClick">写博客</el-button>
      <el-col :span="12">
        <el-menu
          class="el-menu-vertical"
          :router="true"
          :unique-opened="true"
          :default-active="activePage"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><i-ep-document /></el-icon>
              <span>内容管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="article"
                :route="{
                  name: 'article',
                }"
              >
                文章管理
              </el-menu-item>
              <el-menu-item
                index="follower"
                :route="{
                  name: 'follower',
                }"
                >用户管理</el-menu-item
              >
              <el-menu-item
                index="profile"
                :route="{
                  name: 'profile',
                }"
                >个人资料管理</el-menu-item
              >
            </el-menu-item-group>
            <!-- <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu> -->
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><i-ep-document /></el-icon>
              <span>数据中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="article"
                :route="{
                  name: 'article',
                }"
              >
                文章数据
              </el-menu-item>
              <el-menu-item index="2-2">粉丝数据</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu> -->
          </el-sub-menu>
          <!-- <el-menu-item index="2">
            <el-icon><i-ep-menu /></el-icon>
            <span>数据中心</span>
          </el-menu-item> -->
          <el-menu-item index="3">
            <el-icon><i-ep-setting /></el-icon>
            <span>帮助中心</span>
          </el-menu-item>
          <!-- <el-menu-item index="4">
            <el-icon><i-ep-setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
    <div class="create-space-main">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
let activePage = computed(() => {
  // console.log(route.query.activePage as string);
  let page = route.meta.activePage;
  page = page ? page + "" : "home";
  // return route.query.activePage as string;
  // console.log(page);
  return page;
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClick = () => {
  router.push({
    name: "new",
    query: {
      activePage: "new",
    },
  });
};
</script>

<style scoped lang="less">
.create-space {
  display: flex;
  width: 520px;
  min-height: calc(100vh - 52px);
  margin: 0 auto;

  &-sideMenu {
    flex: 1;
    // height: 100%;
    min-height: calc(100vh - 52px);
    padding: 6px 4px 0;
    border-right: 0.1px solid #dcdfe6;
    flex-direction: column;

    button {
      height: 16px;
      margin-bottom: 4px;
      background-color: #609eff;
      font-size: 6px;
      color: #fff;
    }
    .el-col {
      // width: 100%;
      max-width: none;
      .el-menu {
        border: none;
        width: 100%;
      }
    }
  }
  &-main {
    // display: flex;
    // flex-direction: column;
    width: 466px;
    min-height: calc(100vh - 52px);
  }
}
</style>
