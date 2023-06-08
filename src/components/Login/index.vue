<!-- author: TOLIE -->
<!-- date: 2023-05-17 17:18:07 -->
<!-- description: 登录组件 -->
<template>
  <el-card class="box-card login-box">
    <transition
      v-show="ifSignUp && ifAnimate"
      @after-leave="handleChangeFinish"
      enter-active-class="animate__animated animate__fadeInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
    >
      <div class="login-box-content">
        <h3 class="login-box-content-title">欢迎使用知识星球</h3>
        <el-form
          ref="formRef"
          :model="loginForm"
          class="login-box-content-form"
          label-position="top"
          :rules="rules"
        >
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="loginForm.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <div class="login-box-content-form-code">
              <el-input v-model="loginForm.code" />
              <img @click="resetCode" :src="codeUrl" alt="验证码" />
            </div>
          </el-form-item>
          <el-form-item class="submit" size="large">
            <el-button type="primary" @click="onSubmit(formRef)">
              登陆
            </el-button>
          </el-form-item>
          <!-- <el-form-item>
            <el-checkbox v-model="loginForm.check">
              <div class="passport-policy-content">
                <span>我已阅读并同意 </span>
                <el-link type="primary">服务协议</el-link>
                <span> 和 </span>
                <el-link type="primary">隐私政策</el-link>
              </div>
            </el-checkbox>
          </el-form-item> -->
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
  </el-card>
  <div class="signUp" :style="{ fontSize: '14px' }">
    还没有账号？
    <span @click="handleSignUp">立即注册</span>
  </div>
</template>

<script setup lang="ts">
import type { FormItemRule, FormInstance } from "element-plus";
// import { useMainStore } from "@/store";
// import { ElMessage } from "element-plus";
import {
  poemSlice,
  setLocal,
  getLocal,
  setToken,
  setRefreshToken,
} from "@/utils";
import { fetchLogin } from "@/service";
const router = useRouter();

type Form = {
  email: string;
  password: string;
  code: string;
};

// type PoemData = {
//   from: string;
//   content: string;
//   [propName: string]: any;
// };
type Rules = {
  [K in keyof Form]: Array<FormItemRule>;
};

const ifSignUp = ref(true);
const ifAnimate = ref(true); // 可以动画吗
const codeUrl = ref<string>("/api/users/code");

const loginForm = reactive<Form>({
  email: "",
  password: "",
  code: "",
});

// 读到form组件信息
const formRef = ref<FormInstance>();
const rules = reactive<Rules>({
  email: [
    {
      required: true,
      message: "请输入用户名",
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
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
      type: "string",
    },
  ],
});

onBeforeMount(() => {
  init();
});

const init = function () {
  // requestPoem();
};
const resetCode = () => {
  // console.log("reset");
  codeUrl.value = codeUrl.value + "?" + Math.random();
};

const handleChangeFinish = () => {
  ifAnimate.value = true;
};
const handleSignUp = () => {
  // ifAnimate.value = false;
  // ifSignUp.value = !ifSignUp.value;
  router.push({
    name: "sign",
  });
};

// const onSubmit = () => {
//   // console.log('submit!',form.value)
//   form.value?.validate((validate: Boolean) => {
//     // console.log(validate); // Boolean true / false
//     if (validate) {
//       router.push("/");
//       setLocal("token", "1");
//     } else {
//       // ElMessage.error("请输入正确的密码");
//       alert("请输入正确的密码");
//     }
//   });
// };

const onSubmit = async (formEl: FormInstance | undefined) => {
  // console.log(formData);
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const data = await fetchLogin(loginForm);

      if (data.data) {
        console.log(data.data);
        setToken(data.data);
        // setRefreshToken(data.data?.refresh_token);
        router.push("/");
      } else {
        window.$message.error(data.message);
      }
    } else {
      window.$message.error(fields?.code[0].message || "请输入正确的密码");
    }
  });
};
</script>

<style scoped lang="less">
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
    &-code {
      display: flex;
      // width: 100%;
      justify-content: space-between;
    }
    .submit {
      margin-top: 18px;
      div {
        justify-content: center;
      }

      button {
        width: 100%;
        letter-spacing: 6px;
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
.signUp {
  margin-top: 6px;
  color: #606266;
  text-align: center;
  span {
    cursor: pointer;
    color: #409eff;
  }
}
</style>
