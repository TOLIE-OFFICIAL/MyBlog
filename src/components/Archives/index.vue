<!-- author: TOLIE -->
<!-- date: 2022-10-31 11:12:34 -->
<!-- description: 归档页面 -->
<script lang="ts" setup>
// import { onMounted } from "vue";
import { MoreFilled } from "@element-plus/icons-vue";
// import PagesModule from "../Slots/PagesModule/index.vue";

const activities = [
  {
    content: "Event start",
    timestamp: "2018-04-15",
    size: "large",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
    color: "#0bbd87",
  },
  {
    content: "Success",
    timestamp: "2018-04-12",
    type: "primary",
    icon: MoreFilled,
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
    hollow: true,
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
    hollow: true,
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
    hollow: true,
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
    hollow: true,
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
    hollow: true,
  },
];
</script>

<template>
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped lang="less">
:deep(.el-timeline-item) {
  width: 50%;
}
</style>
