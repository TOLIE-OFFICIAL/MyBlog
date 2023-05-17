<template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    :rules="rules"
    label-width="auto"
    label-position="left"
    class="blog"
    size="default"
    status-icon
  >
    <el-form-item label="博客标题" prop="title">
      <el-input class="blog-title" v-model="formData.title" />
    </el-form-item>
    <el-form-item label="博客标签" prop="tags">
      <el-select-v2
        class="blog-tags"
        v-model="formData.tags"
        :options="tag_options"
        placeholder="请选择博客标签"
        allow-create
        filterable
        multiple
        clearable
        :reserve-keyword="false"
        :multiple-limit="5"
      />
    </el-form-item>
    <el-form-item label="文章概要" prop="summary">
      <el-input
        class="blog-summary"
        v-model="formData.summary"
        type="textarea"
      />
    </el-form-item>
    <el-form-item label="文章封面">
      <el-upload
        accept="image/jpeg,image/jpg,image/gif,image/png,image/bmp,image/webp"
        action="#"
        :limit="1"
        :on-exceed="handleExceed"
        :on-success="handleSuccess"
        list-type="picture-card"
        :auto-upload="true"
        :http-request="handleUpload"
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
                <el-icon><i-ep-delete /></el-icon>
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

    <el-form-item class="blog-btns">
      <el-button
        :disabled="ifUploaded"
        type="primary"
        @click="submitForm(ruleFormRef)"
      >
        Create
      </el-button>
      <el-button :disabled="ifUploaded" @click="resetForm(ruleFormRef)"
        >Reset</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
import {
  createArticle,
  getQnToken,
  compressImage,
  getOneArticle,
  updateArticle,
} from "@/service";
import * as qiniu from "qiniu-js";
import { genFileId, type UploadRequestOptions } from "element-plus";
import moment from "moment";

import type {
  UploadFile,
  FormInstance,
  FormRules,
  UploadInstance,
  UploadProps,
  UploadRawFile,
} from "element-plus";
import router from "@/router";

const mainStore = useMainStore();
const route = useRoute();
const id = route.query?.id as string;
// 图片上传
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const ifUploaded = ref(false);
const disabled = ref(false);
const upload = ref<UploadInstance>();

// 表单校验
const ruleFormRef = ref<FormInstance>();
const formData = reactive<BlogArticles.formData>({
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

onBeforeMount(async () => {
  if (route.name == "edit" && id) {
    const { data }: { data: BlogArticles.Article } = await getOneArticle(id);
    // console.log(data);
    mainStore.blogContent_md = decodeURI(data.content);
    formData.title = data.title;
    formData.author = data.author;
    formData.coverUrl = data.coverUrl;
    formData.summary = data.summary;
    formData.tags = data.tags;
    formData.id = data._id;
    formData.createTime = data.createTime;
  } else {
    mainStore.blogContent_md = "# Hello Editor";
  }
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
const handleSuccess = () => {};

const handleUpload = async (options: UploadRequestOptions) => {
  ifUploaded.value = true;
  // 压缩图片选项
  const compressOptions = {
    quality: 0.92,
    noCompressIfLarger: true,
    // maxWidth: 1000,
    // maxHeight: 618
  };

  const compressedFile = await compressImage(options.file, compressOptions);
  const { data: token } = await getQnToken();
  // console.log(data);

  const putExtra = {
    fname: options.file.name,
  };

  // let key = `images/${new Date().getTime()}${imgName}`;

  const Config = {
    useCdnDomain: true,
    region: qiniu.region.z2,
    checkByMD5: true,
    chunkSize: 1,
  };
  if (token) {
    // console.log(token);

    const observable = qiniu.upload(
      compressedFile.dist as any,
      null,
      token,
      putExtra,
      Config
    );
    // const res = await qnUpload(data.dist, options.onProgress, options.file.name);
    // 上传开始
    const subscription = observable.subscribe({
      next(res) {
        // console.log("next", res);
        // if (onProgress) {
        //   file["percent"] = Number(res.total.percent.toFixed(2));
        //   onProgress(file);
        // }
      },
      error(err) {
        // reject(err);
        // console.log(err);
        window.$message?.error(err.message);
        ifUploaded.value = false;
      },
      complete(data: BlogImgs.uploadRes) {
        // console.log(data);
        window.$message?.success("上传成功！");
        ifUploaded.value = false;
        formData["coverUrl"] = data.hash;
        subscription.unsubscribe(); // 上传取消
        // console.log(subscription);
      },
    });
  }
};

const submitForm = async (formEl: FormInstance | undefined) => {
  ifUploaded.value = true;
  formData.content = encodeURI(mainStore.blogContent_md);
  formData.createTime = formData.id
    ? formData.createTime
    : moment().format("YYYY-MM-DD HH:mm:ss");
  formData.updateTime = moment().format("YYYY-MM-DD HH:mm:ss");
  // console.log(formData);
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // 更新
      if (formData.id) {
        const { data } = await updateArticle(formData.id, formData);
        console.log(data);
        if (data) {
          window.$message.success("更新成功");
          ifUploaded.value = false;
          router.push({
            path: "/published",
            state: {
              title: formData.title,
              id: data,
            },
          });
        }
      }
      // 新建
      else {
        const { data } = await createArticle(formData);
        if (data) {
          window.$message.success("发布成功");
          ifUploaded.value = false;
          router.push({
            path: "/published",
            state: {
              title: formData.title,
              id: data,
            },
          });
        }
      }
    } else {
      // 验证未通过
      window.$message.error("error submit!", fields);
      ifUploaded.value = false;
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less" scoped>
.blog {
  position: relative;
  align-items: flex-start;
  background-color: #fff;

  &-title,
  &-tags,
  &-summary {
    width: 100px;
  }
  &-tags {
    margin-right: 16px;
    vertical-align: middle;
  }
  // :deep(.blog-btns) {
  //   justify-content: center !important;
  //   width: 100%;
  // }
}
:deep(.el-upload-list--picture-card .el-upload-list__item-actions span + span) {
  margin-left: 0.1rem;
}
</style>
