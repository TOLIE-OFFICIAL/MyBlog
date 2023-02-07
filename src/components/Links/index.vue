<script lang="ts" setup>
import { ElMessage } from "element-plus";

const test = ref(1);
const cb = () => {};
const open2 = () => {
  ElMessage({
    message: "Congrats, this is a success message.",
    type: "success",
		showClose: true,
    appendTo: ".scrollBar",
    duration: 2000,
  });
};
</script>

<template>
  <div @click="open2">友情墙</div>
  <slot></slot>
</template>

<style scoped lang="less"></style>
