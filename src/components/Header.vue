<template>
  <el-menu
    class="el-menu"
    :default-active="activePage"
    mode="horizontal"
    :router="true"
    :ellipsis="false"
    :unique-opened="true"
  >
    <el-menu-item
      index="0"
      :route="{
        name: 'home',
      }"
      class="logo"
    >
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item
      index="home"
      :route="{
        name: 'home',
      }"
    >
      <el-icon>
        <i-ep-Menu />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <i-ep-Collection />
        </el-icon>
        分类
      </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item
      index="achieves"
      :route="{
        name: 'achieves',
      }"
    >
      <el-icon>
        <i-ep-Finished />
      </el-icon>
      归档
    </el-menu-item>
    <el-menu-item
      index="links"
      :route="{
        name: 'links',
      }"
    >
      <el-icon>
        <i-ep-Link />
      </el-icon>
      友人帐
    </el-menu-item>
    <el-menu-item
      index="tags"
      :route="{
        name: 'tags',
      }"
    >
      <el-icon>
        <i-ep-CollectionTag />
      </el-icon>
      标签墙
    </el-menu-item>

    <el-menu-item
      index="new"
      :route="{
        name: 'new',
      }"
    >
      <el-icon>
        <i-ep-Edit />
      </el-icon>
      写博客
    </el-menu-item>

    <el-menu-item
      index="info"
      :route="{
        name: 'info',
      }"
    >
      <el-icon>
        <i-ep-User />
      </el-icon>
      个人主页
    </el-menu-item>
    <!-- 搜索 -->
    <el-menu-item class="item-extra" style="">
      <el-icon>
        <i-ep-Search />
      </el-icon>
    </el-menu-item>
    <!-- 作者github主页 -->
    <el-menu-item class="item-extra" index="">
      <a
        href="https://github.com/TOLIE-OFFICIAL"
        class="github"
        target="_blank"
      >
        <el-icon>
          <i-mdi-github />
        </el-icon>
      </a>
    </el-menu-item>
    <!-- 消息中心 -->
    <el-menu-item class="item-extra" index="">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- Click Me -->
          <el-badge class="mark" :value="12">
            <template #default>
              <el-icon class="el-icon--right"><i-mdi-bell-outline /></el-icon>
            </template>
          </el-badge>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute();
let activePage = computed(() => {
  // console.log(route.query.activePage as string);
  let page = route.meta.activePage;
  page = page ? page + "" : "home";
  // return route.query.activePage as string;
  // console.log(page);
  return page;
});
</script>

<style scoped lang="less">
.el-menu--horizontal {
  align-items: center;
  height: 26px;
}
.logo {
  display: block;
  height: 18px;
  width: 36px;
  margin-left: 10px;
  color: var(--el-menu-text-color);
  border-bottom: none !important;
  background: url("https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png")
    no-repeat center;
  background-size: contain;
  background-color: var(--el-menu-bg-color) !important;

  &:hover {
    cursor: pointer;
  }
}

.item-extra {
  background-color: var(--el-menu-bg-color) !important;
  border-bottom: none !important;

  padding: 0;
}

.flex-grow {
  flex-grow: 1;
}

// :deep(.is-opened .el-sub-menu__title) {
//     background-color: red !important;
// }
</style>
