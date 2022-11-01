<!-- author: TOLIE -->
<!-- date: 2022-10-31 10:12:15 -->
<!-- description: 归档页面 -->
<template>
  <nav>
    <h1>{{title}}</h1>
  </nav>
  <main>
    <slot></slot>
  </main>
</template>

<script lang='ts' setup>
// import { onMounted } from "vue";
defineProps<{title:string}>()
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]

</script>

<style scoped lang='less'>

</style>