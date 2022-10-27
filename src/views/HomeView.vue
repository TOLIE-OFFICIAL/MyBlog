<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-main>Main</el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>
