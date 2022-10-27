<template>
  <div class="footer">
    <div class="siteInfo">
      <div class="siteInfo-text">
        <p class="siteInfo-text-Copyright">
          <span>
            <a target="_blank" href="tolie.biz">
              Copyright @ TOLIE-OFFICIAL
            </a>
          </span>
        </p>
        <p class="siteInfo-text-govern" style="color: #898989">
          © 2020 打工仔要上岸
          <a href="http://www.beian.miit.gov.cn/" target="_blank">皖ICP备2022003113号</a>
        </p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
</script>
<style scoped lang="less">
.footer {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

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
</style>
