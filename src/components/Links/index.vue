<script lang="ts" setup>
import { ElMessage } from "element-plus";
const cb = () => {};

const open2 = () => {
  ElMessage({
    message: "Congrats, this is a success message.",
    type: "success",
		showClose: true,
    appendTo: ".scrollBar",
    duration: 0,
  });
};

</script>

<template>
  <div @click="open2">友人账</div>
  <slot></slot>
</template>

<style scoped lang="less"></style>
