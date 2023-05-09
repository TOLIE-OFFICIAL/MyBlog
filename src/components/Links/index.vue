<script lang="ts" setup>
import { ElMessage } from "element-plus";
const cb = () => {};

const open2 = () => {
  console.log(111);

  window.$message.success("!!!");
  // ElMessage({
  //   message: "Congrats, this is a success message.",
  //   type: "success",
  //   showClose: true,
  //   appendTo: ".scrollBar",
  //   duration: 2000,
  // });
};
</script>

<template>
  <div class="links-contnt">
    <div @click="open2">友人账</div>
    <button @click="open2">11</button>
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.links-contnt {
  width: 520px;
  margin: 5px auto 0 auto;
}
</style>
