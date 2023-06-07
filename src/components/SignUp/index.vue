<!-- author: TOLIE -->
<!-- date: 2023-05-17 17:24:06 -->
<!-- description: 注册组件 -->
<template>
  <el-card class="box-card sign-box">
    <div class="switch-sign-mode-box" @click="handleModeChange">
      <el-icon class="switch-sign-mode-box-btn">
        <i-ion-qr-code />
      </el-icon>
    </div>
    <transition
      v-show="ifSignUp && ifAnimate"
      @after-leave="handleChangeFinish"
      enter-active-class="animate__animated animate__fadeInLeft animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <div class="sign-box-content sign-mode-pwd">
        <h3 class="sign-box-content-title">
          欢迎使用知识星球
          <!-- <div
            class="getBack"
            @click="getBackLogin"
            :style="{ fontSize: '14px' }"
          >
            <el-link type="primary">
              <el-icon><i-ep-Back /></el-icon>返回登录
            </el-link>
          </div> -->
        </h3>
        <el-form
          ref="form"
          :model="signFormData"
          class="sign-box-content-form"
          label-position="top"
          :rules="signRules"
        >
          <el-form-item label="用户名：" prop="name">
            <el-input
              v-model="signFormData.name"
              placeholder="请为自己设置一个用户名"
            />
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input
              v-model="signFormData.email"
              placeholder="请输入邮箱地址"
            />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="signFormData.password"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item label="确认密码：" prop="confirmPassword">
            <el-input
              v-model="signFormData.confirmPassword"
              type="password"
              placeholder="请再次输入密码"
            />
          </el-form-item>
          <el-form-item label="邮箱验证码 :" prop="code">
            <el-input v-model="signFormData.code">
              <template #append>
                <el-button :disabled="ifDisable" @click="sendEmail">
                  {{ buttonText }}
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="signFormData.check">
              <div class="passport-policy-content">
                <span>我已阅读并同意 </span>
                <el-link type="primary">服务协议</el-link>
                <span> 和 </span>
                <el-link type="primary">隐私政策</el-link>
              </div>
            </el-checkbox>
          </el-form-item>
          <el-form-item class="submit" size="large">
            <el-button type="primary" @click="onSubmit(form)">注册</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 111
          </el-form> -->
    </transition>
    <transition
      v-show="!ifSignUp && ifAnimate"
      @after-leave="handleChangeFinish"
      enter-active-class="animate__animated animate__fadeInLeft animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <div class="sign-mode-qr">1111</div>
      <!-- <img src="" alt=""> -->
    </transition>
  </el-card>
</template>

<script lang="ts" setup>
import type { FormItemRule, FormInstance } from "element-plus";
import { poemSlice, setLocal, getLocal, GetNowDate } from "@/utils";
import { sendMail, fetchLogin, fetchSignUp } from "@/service";

const router = useRouter();
const ifSignUp = ref(true);
const ifAnimate = ref(true); // 可以动画吗
const ifDisable = ref(false); // 可以动画吗
const buttonText = ref("获取验证码");
const countdown = ref(60);
const codeUrl = ref<string>("/api/users/code");

type Rules = {
  [K in keyof ApiAuth.SignUpForm]: Array<FormItemRule>;
};

const form = ref<FormInstance>();

const signFormData = reactive<ApiAuth.SignUpForm>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  code: "",
  check: false,
});

const signRules = reactive<Rules>({
  email: [
    {
      required: true,
      message: "请输入邮箱地址",
      trigger: "blur",
      type: "string",
    },
    { type: "email", message: "请输入有效的邮箱", trigger: ["blur", "change"] },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
      type: "string",
    },
    { min: 6, message: "密码长度不能少于6个字符", trigger: "blur" },
  ],
  confirmPassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value === signFormData.password) {
          callback();
        } else {
          callback(new Error("两次输入的密码不一致"));
        }
      },
      trigger: "blur",
    },
  ],
  check: [
    {
      message: "请阅读服务协议和隐私政策",
      trigger: "blur",
      required: true,
    },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
      type: "string",
    },
    { min: 6, max: 6, message: "请输入6位验证码", trigger: "blur" },
  ],
  name: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
      type: "string",
    },
    { min: 5, max: 8, message: "用户名只能包含5到8个字符", trigger: "blur" },
  ],
});
const sendEmail = () => {
  // 验证邮箱格式
  const reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
  if (reg.test(signFormData.email)) {
    ifDisable.value = true;
    buttonText.value = `${countdown.value} 秒后可重新获取`;
    // 发送认证邮件
    sendMail(signFormData.email);
    const countdownInterval = setInterval(() => {
      countdown.value--;
      buttonText.value = `${countdown.value} 秒后可重新获取`;

      if (countdown.value === 0) {
        clearInterval(countdownInterval);
        ifDisable.value = false;
        buttonText.value = "获取验证码";
        countdown.value = 60;
      }
    }, 1000);
  } else {
    window.$message.error("请输入有效的邮箱！");
  }
};
const handleModeChange = () => {
  ifAnimate.value = false;
  ifSignUp.value = !ifSignUp.value;
};
const handleChangeFinish = () => {
  ifAnimate.value = true;
};

const getBackLogin = () => {
  router.push("/login");
};
const onSubmit = async (formEl: FormInstance | undefined) => {
  // console.log(signFormData);
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const { data } = await fetchSignUp(signFormData);
      console.log("signup", data);
      if (data) {
        window.$message.success("注册成功！");
        router.push("/login");
      }
    } else {
      window.$message.error("请输入有效的邮箱！");
    }
  });
};
</script>

<style scoped lang="less">
.sign-box {
  position: relative;
  padding: 10px 10px 0 10px;
  width: 100%;
  align-items: center;
  width: 180px;
  height: 250px;
  &-content-title {
    // position: relative;
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 20px;
    .getBack {
      position: absolute;
      top: 5px;
      left: 8px;
      font-size: 5px;
      color: #409eff;
      cursor: pointer;
    }
  }

  // &-content-form {
  //   &-code {
  //     display: flex;
  //     // width: 100%;
  //     justify-content: space-between;
  //   }
  //   .submit {
  //     div {
  //       justify-content: center;
  //     }

  //     button {
  //       width: 100%;
  //     }
  //   }
  // }
}
.submit {
  div {
    justify-content: center;
  }

  button {
    width: 100%;
  }
}
.switch-sign-mode-box {
  position: absolute;
  border-color: transparent transparent #82a7fc transparent !important;
  border: 26px solid;
  top: 0;
  right: 0;
  z-index: 666;
  cursor: pointer;
  transform: translate(25px, -25px) rotate(45deg);
  transition: border-color 0.3s;

  &:hover {
    border-color: transparent transparent #409eff transparent !important;
  }
  &-btn {
    position: absolute;
    height: 16px;
    width: 16px;
    top: 8px;
    left: -8px;
    transform: rotate(-45deg);
    color: #fff;
    :deep(.inline-block) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
