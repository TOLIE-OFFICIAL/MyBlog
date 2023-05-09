<template>
  <div class="footer">
    <el-divider border-style="dashed" v-show="ifShow" />
    <div class="siteInfo">
      <div class="siteInfo-text">
        <p class="siteInfo-text-Copyright">
          <span>
            <a target="_blank" href="https://github.com/TOLIE-OFFICIAL">
              Copyright @ TOLIE-OFFICIAL
            </a>
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
  <!-- <div class="empty"></div> -->
</template>

<script lang="ts" setup>
const route = useRoute();

// const ifShow = ref(true);
const FooterArray = ["/create", "/home", "/"];
console.log(route.path);

const ifShow = computed(() => !FooterArray.includes(route.path));
</script>

<style scoped lang="less">
// :deep(.el-divider--horizontal) {
//     margin: 2px 0;
//   }
.el-divider--horizontal {
  margin: 2px 0;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  .siteInfo {
    text-align: center;

    &-text {
      font-size: 6px;

      &-Copyright {
        margin-bottom: 4px;

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
