<template>
  <el-divider border-style="dashed" />
  <div class="footer">
    <div class="siteInfo">
      <div class="siteInfo-text">
        <p class="siteInfo-text-Copyright">
          <span>
            <a target="_blank" href="https://github.com/TOLIE-OFFICIAL"> Copyright @ TOLIE-OFFICIAL </a>
          </span>
        </p>
        <p class="siteInfo-text-govern" style="color: #898989">
          © 2020 打工仔要上岸
          <a href="http://beian.miit.gov.cn/" target="_blank"
            >皖ICP备2022003113号</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="empty"></div>
</template>

<script setup lang="ts">
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
</script>
<style scoped lang="less">
// :deep(.el-divider--horizontal) {
//     margin: 2px 0;
//   }
.el-divider--horizontal {
  margin: 6px 0;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: .533333rem /* 20/37.5 */;
  .siteInfo {
    text-align: center;

    &-text {
      font-size: 13px;

      &-Copyright {
        margin-bottom: 8px;

        a {
          color: black;
        }
      }

      &-govern a {
        color: #898989;
      }
    }
  }
}
.empty {
  height: 3px;
}
</style>
