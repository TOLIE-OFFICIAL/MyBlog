<!-- author: TOLIE -->
<!-- date: 2023-05-09 13:22:00 -->
<!-- description: 个人主页 -->
<template>
  <div class="info">
    <div class="info-aside">
      <!-- 头像 -->
      <div class="info-aside-avatar">
        <el-avatar :size="100" src="https://empty" @error="errorHandler">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
      </div>

      <!-- 文章、标签、分类的数目展示 -->
      <el-descriptions direction="vertical" :column="3" size="large">
        <el-descriptions-item label="文章" align="center">
          111
        </el-descriptions-item>
        <el-descriptions-item label="标签" align="center">
          222
        </el-descriptions-item>
        <el-descriptions-item label="分类" align="center">
          333
        </el-descriptions-item>
      </el-descriptions>

      <!-- 社交工具 -->
      <el-card class="info-aside-social" shadow="hover">
        <template #default>
          <div class="info-aside-social-content">
            <el-button circle size="large">
              <template #default>
                <el-icon size="20" color="#191717">
                  <i-simple-icons-tencentqq />
                </el-icon>
              </template>
            </el-button>
            <el-button circle size="large">
              <template #default>
                <el-icon size="20" color="#e76a8d">
                  <i-simple-icons-bilibili />
                </el-icon>
              </template>
            </el-button>
            <el-button circle size="large">
              <template #default>
                <el-icon size="20" color="#64b9ff">
                  <i-simple-icons-telegram />
                </el-icon>
              </template>
            </el-button>
            <el-button circle size="large">
              <template #default>
                <el-icon size="20" color="#FCD94F"
                  ><i-mdi-email-outline
                /></el-icon>
              </template>
            </el-button>
          </div>
        </template>
      </el-card>

      <!-- 分类 -->
      <el-card class="info-aside-category" shadow="hover">
        <template #header> 文章分类 </template>
        <template #default>
          <ul class="info-aside-category-list">
            <li class="info-aside-category-list-item">前端</li>
            <li class="info-aside-category-list-item">后端</li>
            <li class="info-aside-category-list-item">IOS</li>
            <li class="info-aside-category-list-item">Android</li>
          </ul>
        </template>
      </el-card>
    </div>
    <div class="info-content">content</div>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted } from "vue";
const errorHandler = () => true;
</script>

<style scoped lang="less">
.info {
  display: flex;
  width: 520px;
  margin: 5px auto 0 auto;
  min-height: calc(100vh - 31px);
  &-aside {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100%;
    &-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-social {
      border-radius: 6px;
      border: none;
      &-content {
        display: flex;
        justify-content: space-between;
      }
    }
    &-category {
      border-radius: 6px;
      border: none;
    }
  }
  &-content {
    flex: 1;
  }
}
</style>
