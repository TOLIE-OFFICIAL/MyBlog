<template>
  <el-menu
    class="el-menu-demo"
    :default-active="activePage"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
    :unique-opened="true"
  >
    <li class="logo" style="padding: 0 20px">
      <RouterLink to="/" style="height: 46px">
        <img
          v-once
          class="logo-image"
          src="https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png"
          alt="Logo"
          style="height: 46px"
        />
      </RouterLink>
    </li>
    <div class="flex-grow" />
    <el-menu-item index="/">
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
    <el-menu-item index="archives">
      <el-icon>
        <i-ep-Finished />
      </el-icon>
      归档
    </el-menu-item>
    <el-menu-item index="links">
      <el-icon>
        <i-ep-Link />
      </el-icon>
      友人帐
    </el-menu-item>
    <el-menu-item index="tags">
      <el-icon>
        <i-ep-CollectionTag />
      </el-icon>
      标签墙
    </el-menu-item>
    <el-menu-item index="6" style="">
      <el-icon>
        <i-ep-Search />
      </el-icon>
      search
    </el-menu-item>

    <el-menu-item class="user_info">
      <a href="https://www.github.com" class="github" />
      <el-icon>
        <i-ep-User />
      </el-icon>
      github
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
// const offsetTop = mainStore.scrollY;
// const textColor = ref("#fff");
// const menuColor = ref("");
// const menuBorderColor = reactive({
//   borderBottomColor: "transparent",
// });
// const activePage = ref("/");

// computed(()=>{

// })
const route = useRoute();
const activePage = computed(() => {
  // console.log(typeof route.name,typeof route.path);
  return route.path;
});
</script>

<style scoped lang="less">
.logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0;
  color: var(--el-menu-text-color);

  &:hover {
    cursor: pointer;
  }
}

.user_info {
  position: relative;

  .github {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
}

.flex-grow {
  flex-grow: 1;
}

// :deep(.is-opened .el-sub-menu__title) {
//     background-color: red !important;
// }
</style>
