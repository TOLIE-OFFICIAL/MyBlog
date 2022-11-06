<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<template>
  <el-carousel indicator-position="none">
    <!-- <el-carousel-item v-for="item in 4" :key="item"> -->
    <!-- <el-carousel-item> -->
      <slot></slot>
    <!-- </el-carousel-item> -->
  </el-carousel>
</template>

<style scoped lang='less'>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>

<script setup lang='ts'>

</script>
