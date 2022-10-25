<template>
  <el-card class="box-card">
    <el-form :model="formInline" class="demo-form-inline" label-position="top">
      <el-form-item label="账号：">
        <el-input v-model="formInline.user" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="formInline.pwd" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  pwd: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>