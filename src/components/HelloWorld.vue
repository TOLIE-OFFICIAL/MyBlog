<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
    <button @click="getErr">警告</button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

defineProps<{
  msg: string;
}>();
const getErr = function () {
  ElMessage.error("error")
}
</script>
<style scoped>

</style>
