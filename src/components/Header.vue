<template>
  <el-menu
    class="el-menu-demo"
    :background-color="menuColor"
    :text-color="textColor"
    :default-active="activePage"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    :router="true"
    :style="menuBorderColor"
  >
    <el-menu-item>
      <img
        v-once
        class="logo-image"
        src="https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png"
        alt="Logo"
        style="height: 46px; margin-top: 6px"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">
      <el-icon>
        <i-ep-Menu />
      </el-icon>
      首页
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
    <el-menu-item index="7">
      <el-icon>
        <i-ep-User />
      </el-icon>
      github
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const textColor = ref('#fff')
const menuColor = ref("transprent");
const menuBorderColor = reactive({
  borderBottomColor: "transparent",
});
const activePage = ref("/");


onBeforeMount(() => {
  // 新页面载入调用onBeforeMount，从localtion获取default-active
  // const hrefArr = location.href.split("/");
  // activePage.value =
  //   sessionStorage.getItem("activePage") || hrefArr[hrefArr.length - 1] || "/";
});

const handleSelect = (key: string, keyPath: string[]) => {
  // 点击菜单tab 获取default-active
  // sessionStorage.setItem("activePage", key);
  activePage.value = key;
  // console.log(activePage);
};
</script>

<style scoped lang="less">
.flex-grow {
  flex-grow: 1;
}
</style>
