<template>
  <div class="layout-box">
    <div class="web-login-left">
      <div class="logo">
        <!-- <img v-once class="logo-image" :src="https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png" alt="Logo" /> -->
      </div>
      <el-card class="box-card login-box" :body-style="cardStyle">
        <div class="login-box-content flex-column">
          <h3 class="login-box-content-title">欢迎使用我的博客</h3>
          <el-form
            ref="form"
            :model="formInline"
            class="login-box-content-form"
            label-position="top"
            :rules="rules"
          >
            <el-form-item label="账号：" prop="user">
              <el-input v-model="formInline.user" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码：" prop="pwd">
              <el-input
                v-model="formInline.pwd"
                type="password"
                placeholder="请输入密码"
              />
            </el-form-item>
            <el-form-item class="submit" size="large">
              <el-button type="primary" @click="onSubmit"> 登陆 </el-button>
            </el-form-item>
          </el-form>
          <div class="empty"></div>
          <el-checkbox v-model="formInline.check">
            <div class="passport-policy-content">
              <span>我已阅读并同意 </span>
              <el-link type="primary">服务协议</el-link>
              <span> 和 </span>
              <el-link type="primary">隐私政策</el-link>
            </div>
          </el-checkbox>
          <el-divider>其他方式</el-divider>
          <el-button round>
            <el-icon class="el-icon--left" color="#2EA121">
              <!-- 自动导入必须遵循名称格式
                 {prefix：默认为i}-{collection：图标集合的名称}-{icon：图标名称} 
              -->
              <i-ep-Cloudy />
            </el-icon>
            OSS登陆
          </el-button>
        </div>
      </el-card>
    </div>
    <div class="web-login-right flex-column">
      <div class="web-login-right-title" :poem="poem">
        <div class="poem">{{ poem.content }}</div>
        <div class="writer">——{{ poem.from }}</div>
      </div>
      <div class="web-login-right-img"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeMount } from "vue";
import type { FormItemRule, FormInstance } from "element-plus";
// import { useMainStore } from "@/store";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { fetchPoem } from "@/service";
import { poemSlice } from "@/utils";

import { setLocal, getLocal } from "@/utils";
const router = useRouter();

type Form = {
  user: string;
  pwd: string;
  check: boolean;
};
type PoemData = {
  from: string;
  content: string;
  [propName: string]: any;
};
type Rules = {
  [K in keyof Form]: Array<FormItemRule>;
};

const cardStyle = {
  padding: "40px 40px 0 40px",
  width: "100%",
};

const requestPoem = async () => {
  // console.log(111);

  const { data } = await fetchPoem();
  if (data) {
    const content: string = data.content;
    setLocal("from", data.origin);
    setLocal("content", poemSlice(content));
  }
};

const formInline = reactive<Form>({
  user: "",
  pwd: "",
  check: false,
});
// const Logo = localStorage.getItem("Logo") || '';
const poem = ref<PoemData>({
  from: (getLocal("from") as string) || "tolie",
  content: (getLocal("content") as string) || "慢一些，稳一些",
}); // 右侧每日一言

// 读到form组件信息
const form = ref<FormInstance>();
const rules = reactive<Rules>({
  user: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
      type: "string",
    },
  ],
  pwd: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
      type: "string",
    },
  ],
  check: [
    {
      required: true,
    },
  ],
});

// getPoem({
//   max_length: 10,
//   c: "d",
//   encode: "json",
// }).then((data) => {
//   localStorage.setItem('slogan', JSON.stringify(data))
// })

onBeforeMount(() => {
  requestPoem();
});
//   let { from, content } = JSON.parse(localStorage.getItem('slogan') || '');
//   [
//
//   ] = [from, content];
// })
//   // if (!localStorage.getItem("Logo")) {
//   //   saveImg("Logo");
//   // }
//   // mainStore.saveImg();

const onSubmit = () => {
  // console.log('submit!',form.value)
  form.value?.validate((validate: Boolean) => {
    // console.log(validate); // Boolean true / false
    if (validate) {
      router.push("/");
      localStorage.setItem("token", "1");
    } else {
      // ElMessage.error("请输入正确的密码");
      alert("请输入正确的密码");
    }
  });
};
</script>

<style scoped lang="less">
.layout-box {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .web-login-left {
    position: relative;
    flex: 1;
    height: inherit;

    .logo {
      width: 130px;
      margin-left: 20px;
      margin-top: 20px;

      img {
        width: inherit;
      }
    }

    .login-box {
      position: absolute;
      align-items: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 444px;
      height: 550px;

      // .el-card__body{
      //   width: 100%;
      // }
      &-content-title {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      &-content-form {
        .submit {
          div {
            justify-content: center;
          }

          button {
            width: 100%;
          }
        }
      }

      .empty {
        width: inherit;
        height: 80px;
      }
    }
  }

  .web-login-right {
    width: 519px;
    height: inherit;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: #409eff;

    &-title {
      width: 350px;
      color: var(--el-color-white);

      .poem {
        font-size: 24px;
      }

      .writer {
        margin-top: 16px;
        text-align: right;
        font-style: italic;
        font-size: 16px;
      }
    }

    &-img {
      width: 350px;
      height: 350px;
      background-image: url(http://pic.tolie.biz/right_layout.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}
</style>
