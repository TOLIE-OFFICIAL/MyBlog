<template>
  <exception-base type="published" :title="props.title" />
</template>

<script lang="ts" setup>
import router from "@/router";

// const route = useRoute();
interface Props {
  title: string;
  postId: string;
}

const banRepost = ["/new", "/edit"];
const props: Props = history.state;
// console.log(props);

// 监听路由即将离开 ??? 无效
onBeforeRouteUpdate((to, from, next) => {
  // 有值传过来
  if (props.postId && props.title) {
    console.log(222);

    if (from.path === "/published" && banRepost.includes(to.path)) {
      // console.log(props.postId);
      next(false);
      console.log(111);
      router.replace({
        path: "/edit",
        query: {
          id: props.postId,
        },
      });
    } else {
      next();
    }
  } else {
    console.log(333);
    // 没有值传过来
    next("/");
  }
});
</script>

<style scoped></style>
