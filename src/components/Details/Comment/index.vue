<!-- author: TOLIE -->
<!-- date: 2023-04-20 13:35:05 -->
<!-- description: 博客详情页面下方的评论区 取代通用的footer -->
<template>
  <ArticleCard :title="title" class="comment">
    <el-form
      ref="ruleFormRef"
      :model="FormData"
      :rules="rules"
      label-width="56px"
      class="comment-form"
      :size="formSize"
      status-icon
      :inline-message="true"
    >
      <!-- <div class="comment-form-header">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="FormData.name" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="FormData.email" />
        </el-form-item>
        <el-form-item label="网址" prop="link">
          <el-input v-model="FormData.link" />
        </el-form-item>
      </div> -->

      <el-form-item class="comment-form-content" prop="content">
        <md-editor
          v-model="FormData.content"
          :sanitize="sanitize"
          :preview="false"
          :footers="[]"
          :toolbars="[]"
        />
      </el-form-item>

      <el-form-item class="comment-form-bottom">
        <el-button>
          <a
            href="https://guides.github.com/features/mastering-markdown/"
            title="Markdown Guide"
            aria-label="Markdown is supported"
            class="comment-form-bottom-markdown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <el-icon>
              <i-mdi-language-markdown />
            </el-icon>
          </a>
        </el-button>
        <div class="emoji-picker">
          <el-button
            class="emoji-picker-icon"
            ref="button"
            type="default"
            @click="handleClick"
          >
            <el-icon>
              <i-mdi-emoji />
            </el-icon>
          </el-button>

          <EmojiPicker
            class="emoji"
            :native="true"
            :hide-search="true"
            :disable-skin-tones="true"
            @select="onSelectEmoji"
            v-show="ifShowEmoji"
          />
        </div>
        <div class="empty"></div>

        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </ArticleCard>
  <div class="comment-content">
    <ul class="comment-content-order">
      <li class="comment-content-order-normal active">按正序</li>
      <li class="comment-content-order-abnormal">按倒序</li>
    </ul>
    <div class="comment-content-empty">这是一片无人区…</div>
    <ul class="comment-content-item"></ul>
    <!-- 加一个虚拟列表 -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import MdEditor from "md-editor-v3";
import sanitizeHtml from "sanitize-html";
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";
import "md-editor-v3/lib/style.css";
import { GetNowDate } from "@/utils";

const formSize = ref("default");

const BlogID = defineProps<{
  id: string;
}>();

const title = "共有5条评论";
const ifShowEmoji = ref(false);

const ruleFormRef = ref<FormInstance>();
const FormData = reactive({
  author: "Hello", // 填用户的_id
  content: "",
  postId: "",
  createdAt: "",
  parentComment: "",
});

const rules = reactive<FormRules>({
  // name: [
  //   { required: true, message: "请给自己取个昵称", trigger: "blur" },
  //   { min: 6, max: 10, message: "Length should be 6 to 10", trigger: "blur" },
  // ],
  content: [{ required: true, message: "评论内容不能为空哦", trigger: "blur" }],
});

const handleClick = () => {
  // console.log(111);
  ifShowEmoji.value = !ifShowEmoji.value;
};
const onSelectEmoji = (emoji: MyEmojiPicker.Emoji) => {
  // console.log(emoji);
  FormData.content += emoji.i;
  ifShowEmoji.value = !ifShowEmoji.value;
};

const submitForm = async (formEl: FormInstance | undefined) => {
  FormData.createdAt = GetNowDate();
  FormData.postId = BlogID.id;

  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!",FormData);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// 安全性处理
const sanitize = (html: string) => {
  return sanitizeHtml(html);
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
  // height: 400px;
  overflow: visible !important;

  &-content {
    // height: 46px;
    &-empty {
      width: 100%;
      padding: 52px;
      font-size: 6px;
      text-align: center;
    }
    &-order {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 12px;

      li {
        font-size: 4px;
        margin-left: 4px;
        color: #999;
        cursor: pointer;
      }
    }
  }

  :deep(.el-card__header) {
    border: none;
  }
  :deep(.el-card__body) {
    padding: 0 2px 2px 2px;
    border: 0.1px solid #dedfe6;
    border-radius: 4px;
  }
  &-form {
    &-header {
      display: flex;
      align-items: center;
      border-bottom: 1px dashed #dedfe6;
      :deep(.el-form-item) {
        flex: 1;
        margin-bottom: 0;
        height: 100%;
        .el-form-item__label {
          padding: 2px 0;
        }
        .el-form-item__content {
          padding: 2px 0;

          .el-input__wrapper {
            box-shadow: 0 0 0 0px
              var(--el-input-border-color, var(--el-border-color)) inset;
            .el-input__inner {
              border: 0 !important;

              &:focus {
                background: #f8f8f8;
              }
            }
          }
        }
      }
    }

    &-content {
      height: 56px;
      margin: 4px 0;
      padding-bottom: 5px;
      :deep(.el-form-item__content) {
        height: 100%;
        margin-left: 0 !important;
        .md-editor {
          height: 100%;
          border: none;
          #md-editor-v3-textarea {
            padding: 1px 2px;
            font-size: 6px;
          }
        }
      }
    }
    &-bottom {
      margin: 2px 0;
      :deep(.el-form-item__content) {
        height: 100%;
        margin-left: 0 !important;
        justify-content: end;
        .empty {
          flex: 1;
        }
        .emoji-picker {
          position: relative;
          margin-left: 2px;
          .emoji {
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 999;
          }
        }

        a {
          color: #606266;
        }
      }
    }
  }
}
</style>
