<template>
  <div class="layout-box">
    <div class="web-login-left">
      <!-- <div> -->
      <el-card class="box-card login-box">
        <transition
          v-show="ifSignUp && ifAnimate"
          @after-leave="handleChangeFinish"
          enter-active-class="animate__animated animate__fadeInRight animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
        >
          <div class="login-box-content">
            <h3 class="login-box-content-title">欢迎使用我的博客</h3>
            <el-form
              ref="form"
              :model="loginForm"
              class="login-box-content-form"
              label-position="top"
              :rules="rules"
            >
              <el-form-item label="账号：" prop="email">
                <el-input v-model="loginForm.email" placeholder="请输入账号" />
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  placeholder="请输入密码"
                />
              </el-form-item>
              <el-form-item class="submit" size="large">
                <el-button type="primary" @click="onSubmit"> 登陆 </el-button>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="loginForm.check">
                  <div class="passport-policy-content">
                    <span>我已阅读并同意 </span>
                    <el-link type="primary">服务协议</el-link>
                    <span> 和 </span>
                    <el-link type="primary">隐私政策</el-link>
                  </div>
                </el-checkbox>
              </el-form-item>
            </el-form>

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
        </transition>
        <transition
          v-show="!ifSignUp && ifAnimate"
          @after-leave="handleChangeFinish"
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutRight animate__faster"
        >
          <el-form
            ref="form"
            :model="signForm"
            class="login-box-content-form"
            label-position="top"
            :rules="rules"
          >
            111
          </el-form>
        </transition>
      </el-card>
      <div class="signUp" :style="{ fontSize: '14px' }">
        还没有账号？
        <span @click="handleSignUp">立即注册</span>
      </div>
      <!-- </div> -->
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
import type { FormItemRule, FormInstance } from "element-plus";
// import { useMainStore } from "@/store";
// import { ElMessage } from "element-plus";
import { fetchPoem } from "@/service";
import { poemSlice, setLocal, getLocal } from "@/utils";
const router = useRouter();

type Form = {
  email: string;
  password: string;
  check: boolean;
};
type SignForm = {
  email: string;
  password: string;
  check?: boolean;
};
type PoemData = {
  from: string;
  content: string;
  [propName: string]: any;
};
type Rules = {
  [K in keyof Form]: Array<FormItemRule>;
};

const ifSignUp = ref(true);
const ifAnimate = ref(true); // 可以动画吗

const loginForm = reactive<Form>({
  email: "",
  password: "",
  check: false,
});
const signForm = reactive<SignForm>({
  email: "",
  password: "",
});

// const Logo = localStorage.getItem("Logo") || '';
const poem = ref<PoemData>({
  from: (getLocal("from_who") as string) || "tolie",
  content: (getLocal("hitokoto") as string) || "慢一些，稳一些",
}); // 右侧每日一言

// 读到form组件信息
const form = ref<FormInstance>();
const rules = reactive<Rules>({
  email: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
      type: "string",
    },
  ],
  password: [
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

onBeforeMount(() => {
  init();
});

const init = function () {
  requestPoem();
};
const handleChangeFinish = () => {
  console.log("finish");

  ifAnimate.value = true;
};
const handleSignUp = () => {
  ifAnimate.value = false;
  ifSignUp.value = !ifSignUp.value;
};
const requestPoem = async () => {
  const { data } = await fetchPoem({
    max_length: 12,
    min_length: 8,
    c: "d",
    encode: "json",
  });
  // console.log(data);
  if (data) {
    setLocal("from_who", data.from_who ? data.from_who : "匿名");
    setLocal("hitokoto", data.hitokoto);
  }
};

const onSubmit = () => {
  // console.log('submit!',form.value)
  form.value?.validate((validate: Boolean) => {
    // console.log(validate); // Boolean true / false
    if (validate) {
      router.push("/");
      setLocal("token", "1");
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: inherit;

    .box-card {
      padding: 10px 10px 0 10px;
      width: 100%;
    }

    .login-box {
      align-items: center;
      width: 180px;
      height: 220px;
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      // .el-card__body{
      //   width: 100%;
      // }
      &-content-title {
        font-size: 10px;
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

      // .empty {
      //   width: inherit;
      //   height: 60px;
      // }
    }
    .signUp-box {
      align-items: center;
      width: 180px;
      height: 220px;
    }
  }
  .signUp {
    margin-top: 6px;
    color: #606266;
    text-align: center;
    span {
      cursor: pointer;
      color: #409eff;
    }
  }
  .web-login-right {
    width: 260px;
    height: inherit;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background-color: #409eff;

    &-title {
      width: 200px;
      margin-bottom: 10px;
      color: var(--el-color-white);

      .poem {
        font-size: 12px;
      }

      .writer {
        margin-top: 16px;
        text-align: right;
        font-style: italic;
        font-size: 8px;
      }
    }

    &-img {
      width: 160px;
      height: 160px;
      background-image: url("@/assets/images/loginPage-2.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}
</style>
