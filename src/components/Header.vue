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
      index=""
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
      <a href="https://github.com/TOLIE-OFFICIAL" class="github" target='_blank'>
      <el-icon>
        <i-mdi-github />
      </el-icon>
      </a>
      github
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const route = useRoute();
let activePage = computed(() => {
  // console.log(route.name,typeof route.path);
  return route.query.activePage as string;
});
</script>

<style scoped lang="less">
.logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width:100px;
  margin-left: 10px;
  color: var(--el-menu-text-color);
  background: url("https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png")
    no-repeat center;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
}

.user_info {
  // position: relative;
  // align-items: center;
  .github {
    // display: block;
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // z-index: 999;
  }
}

.flex-grow {
  flex-grow: 1;
}

// :deep(.is-opened .el-sub-menu__title) {
//     background-color: red !important;
// }
</style>
