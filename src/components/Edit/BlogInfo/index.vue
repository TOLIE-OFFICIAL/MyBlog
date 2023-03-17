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
    <el-form-item label="文章封面">
      <el-upload
        :limit="1"
        :on-exceed="handleExceed"
        action="#"
        list-type="picture-card"
        :auto-upload="false"
      >
        <el-icon><i-ep-Plus /></el-icon>

        <template #file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <el-icon><i-ep-ZoomIn /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <el-icon><i-ep-Download /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <el-icon><i-ep-Delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
      </el-upload>

      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
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
import { useMainStore } from "@/store";
import { createArticle } from "@/service";
import { genFileId } from "element-plus";
// import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import type {
  UploadFile,
  FormInstance,
  FormRules,
  UploadInstance,
  UploadProps,
  UploadRawFile,
} from "element-plus";
import moment from "moment";

const mainStore = useMainStore();
// 图片上传
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const upload = ref<UploadInstance>();

// 表单校验
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

// 封面上传相关方法
const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

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
