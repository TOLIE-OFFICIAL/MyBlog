<template>
  <div class="layout-box">
    <div class="web-login-left">
      <div class="logo">
        <img v-once class="logo-image" :src="Logo" alt="Logo" />
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
        <div class="poem">{{ poem.hitokoto }}</div>
        <div class="writer">——{{ poem.from }}</div>
      </div>
      <div class="web-login-right-img"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import HelloWorld from "./components/HelloWorld.vue";
import { reactive, ref, onMounted } from "vue";
import type { FormItemRule, FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { getPoem } from "@/api/getPoem";
type Form = {
  user: string;
  pwd: string;
  check: boolean;
};
type PoemData = {
  from: string;
  hitokoto: string;
  id: number;
  length: number;
  type: string;
};
type Rules = {
  [K in keyof Form]: Array<FormItemRule>;
};
const cardStyle = {
  padding: "40px 40px 0 40px",
  width: "100%",
};
const router = useRouter();
const formInline = reactive<Form>({
  user: "",
  pwd: "",
  check: false,
});
const Logo = localStorage.getItem("Logo");
const poem = ref<PoemData>({
  from: "TOLIE",
  hitokoto: "慢一些，稳一些",
  id: 0,
  length: 7,
  type: "",
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
// const getPoem = function (params: poemReq) {
//   console.log(params,11)
//   return axios.get("https://v1.hitokoto.cn", {params});
// }
onMounted(() => {
  // console.log(getPoem);
  getPoem({
    max_length: 10,
    c: "d",
    encode: "json",
  }).then(({ data }) => {
    let { from, hitokoto, id, length, type } = data;
    [
      poem.value.from,
      poem.value.hitokoto,
      poem.value.id,
      poem.value.length,
      poem.value.type,
    ] = [from, hitokoto, id, length, type];
  });
});
const onSubmit = () => {
  // console.log('submit!',form.value)
  form.value?.validate((validate) => {
    // console.log(validate); // Boolean true / false
    if (validate) {
      router.push("/about");
      localStorage.setItem("token", "1");
    } else {
      ElMessage.error("请输入正确的密码");
      // console.log(111)
    }
  });
};
const saveImg = function (key: string) {
  let img = new Image(),
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    src = "https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png"; // insert image url here

  img.crossOrigin = "Anonymous";

  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);
    localStorage.setItem(key, canvas.toDataURL("image/png"));
  };
  img.src = src;
  // make sure the load event fires for cached images too
  if (img.complete || img.complete === undefined) {
    img.src = "";
    img.src = src;
  }
};
if (!localStorage.getItem("Logo")) {
  saveImg("Logo");
}
</script>

<style scoped lang="less">
.layout-box {
  display: flex;
  height: 100%;
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
      color: #fff;
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
