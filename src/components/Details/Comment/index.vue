<!-- author: TOLIE -->
<!-- date: 2023-04-20 13:35:05 -->
<!-- description: 博客详情页面下方的评论区 取代通用的footer -->
<template>
  <ArticleCard :title="title" class="comment">
    <el-form
      ref="ruleFormRef"
      :model="FormData"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="昵称" prop="name">
        <el-input v-model="FormData.name" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="FormData.email" />
      </el-form-item>
      <el-form-item label="网址" prop="link">
        <el-input v-model="FormData.link" />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="FormData.comment" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </ArticleCard>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");

const title = "共有5条评论";

const ruleFormRef = ref<FormInstance>();
const FormData = reactive({
  name: "Hello",
  link: "",
  email: "",
  comment: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
// defineProps<{ title: string }>()
</script>

<style scoped lang="less">
.comment {
  width: 520px;
}
</style>
