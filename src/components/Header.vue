<template>
  <el-menu
    class="el-menu-demo"
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
        query: {
          activePage: 'home',
        },
      }"
      class="logo"
    >
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item
      index="home"
      :route="{
        name: 'home',
        query: {
          activePage: 'home',
        },
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
        query: {
          activePage: 'achieves',
        },
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
        query: {
          activePage: 'links',
        },
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
        query: {
          activePage: 'tags',
        },
      }"
    >
      <el-icon>
        <i-ep-CollectionTag />
      </el-icon>
      标签墙
    </el-menu-item>
    <el-menu-item
      index="edit"
      :route="{
        name: 'edit',
        query: {
          activePage: 'edit',
        },
      }"
    >
      <el-icon>
        <i-ep-Edit />
      </el-icon>
      写博客
    </el-menu-item>
    <el-menu-item index="search" style="">
      <el-icon>
        <i-ep-Search />
      </el-icon>
      search
    </el-menu-item>

    <el-menu-item class="user_info" index="">
      <a
        href="https://github.com/TOLIE-OFFICIAL"
        class="github"
        target="_blank"
      >
        <el-icon>
          <i-mdi-github />
        </el-icon>
      </a>
      github
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute();
let activePage = computed(() => {
  // console.log(route.query.activePage as string);
  let page = route.query.activePage;
  page = page ? page + "" : "home";
  // return route.query.activePage as string;
  // console.log(page);
  return page;
});
</script>

<style scoped lang="less">
.el-menu--horizontal {
  align-items: center;
}
.logo {
  height: 58px;
  width: 100px;
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

.user_info {
  background-color: var(--el-menu-bg-color) !important;
  border-bottom: none !important;

  // position: relative;
  // align-items: center;
  // .github {
  // display: block;
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // z-index: 999;
  // }
}

.flex-grow {
  flex-grow: 1;
}

// :deep(.is-opened .el-sub-menu__title) {
//     background-color: red !important;
// }
</style>
