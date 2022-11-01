<!-- author: TOLIE -->
<!-- date: 2022-10-31 11:12:34 -->
<!-- description: 归档页面 -->
<script lang='ts' setup>
// import { onMounted } from "vue";
import PagesModule from '../Slots/PagesModule/index.vue'

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

<template>
  <PagesModule title="文章归档">
    <el-timeline>
      <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </PagesModule>
</template>

<style scoped lang='less'>

</style>