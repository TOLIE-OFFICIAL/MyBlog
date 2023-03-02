<template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    :rules="rules"
    label-width="auto"
    label-position="left"
    class="Article_Form"
    size="default"
    status-icon
  >
    <el-form-item label="博客标题" prop="title">
      <el-input v-model="formData.title" style="width: 240px" />
    </el-form-item>
    <el-form-item label="博客标签" prop="tags">
      <el-select-v2
        v-model="formData.tags"
        :options="tag_options"
        placeholder="请选择博客标签"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        allow-create
        filterable
        multiple
        clearable
        :reserve-keyword="false"
      />
    </el-form-item>
    <el-form-item label="文章概要">
      <el-input v-model="formData.summary" type="textarea" />
    </el-form-item>
    <el-form-item label="是否置顶" prop="setTop">
      <el-switch v-model="formData.priority" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useMainStore } from "@/store";
import { createArticle } from "@/service";
import type { FormInstance, FormRules } from "element-plus";
import moment from "moment";

const mainStore = useMainStore();

const ruleFormRef = ref<FormInstance>();
const formData = reactive({
  title: "Hello",
  author: "tolie-official", // 作者
  tags: [],
  priority: false,
  content: "", // markdown 格式
  summary: "",
  updateTime: "",
  createTime: "",
});
//
// formData.detail = computed(() => {
//   return mainStore.blogContent;
// }).value;

const tag_options: any[] = reactive([]);

const rules = reactive<FormRules>({
  title: [
    { required: true, message: "请输入标题", trigger: "blur" },
    { min: 3, max: 30, message: "标题长度必须大于3,小于30", trigger: "blur" },
  ],
  tags: [
    {
      type: "array",
      required: true,
      message: "请选择至少一个博客标签",
      trigger: "change",
    },
  ],
  summary: [{ required: true, message: "请输入文章摘要", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  formData.content = encodeURI(mainStore.blogContent_md);
  formData.updateTime = moment().format("YYYY-MM-DD HH:mm:ss");
  formData.createTime = moment().format("YYYY-MM-DD HH:mm:ss");
  // console.log(formData)
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // console.log(formData);
      createArticle(formData);
      console.log("submit!");
      // 执行提交
    } else {
      console.log("error submit!", fields);
      // 验证未通过
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less" scoped>
.Article_Form {
  position: relative;
  align-items: flex-start;
  background-color: #fff;
}
</style>
