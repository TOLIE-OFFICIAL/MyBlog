<template>
  <div class="home_nav">
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" />
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" />
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" />
      </div>
    </div>
    <h2
      id="text"
      ref="text"
      v-if="mainStore.scrollY <= mainStore.windowHeight"
      :style="{ transform: `translateY(${mainStore.scrollY * 0.5}px)` }"
    >
      TOLIE's BLOG
    </h2>
  </div>

  <div class="sec" id="sec">
    <!-- 异步组件 -->
    <Suspense>
      <template #default>
        <TopFeature
          class="TopFeature"
          title="START:DASH!!"
          style="marginbottom: 3px"
        ></TopFeature>
      </template>
      <template #fallback>111</template>
    </Suspense>
    <Suspense>
      <template #default>
        <MainFeature class="MainFeature" title="Discovery"></MainFeature>
      </template>
      <template #fallback>2222</template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { debounce } from "lodash";
import { fetchArticles } from "@/service";
import { useMainStore } from "@/store";

const mainStore = useMainStore();

const debounced_update = debounce(
  () => {
    mainStore.windowHeight = document.body.clientHeight;
    mainStore.windowWidth = document.body.clientWidth;
  },
  250,
  { maxWait: 1000 }
);

const requestLogin = async () => {
  // console.log(111);
  
  const { data } = await fetchArticles();
  if (data) {
    console.log("data", data); // { token: "这是token" }
  }
}

onBeforeMount(()=>{
  requestLogin()
})
onMounted(() => {
  mainStore.windowHeight = document.body.clientHeight;
  mainStore.windowWidth = document.body.clientWidth;
  window.addEventListener("resize", debounced_update);
});

onUnmounted(() => window.removeEventListener("resize", debounced_update));

// console.log(document.body.clientHeight);

// const text = ref();
</script>
<style scoped lang="less">
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }

  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }

  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

@-webkit-keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}

@keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}

@-webkit-keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}

@keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}

.home_nav {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 100px;
  background-image: url(@/assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  // overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-attachment: fixed;
    background-image: url(@/assets/images/grid.png);
  }

  & .waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }

  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;

    &.bgTop {
      z-index: 15;
      opacity: 0.5;
    }

    &.bgMiddle {
      z-index: 10;
      opacity: 0.75;
    }

    &.bgBottom {
      z-index: 5;
    }

    .wave {
      position: absolute;
      left: 0;
      width: 200%;
      height: 100%;
      background-repeat: repeat no-repeat;
      background-position: 0 bottom;
      transform-origin: center bottom;
    }

    .waveTop {
      background-size: 50% 100px;
      animation: move-wave 3s;
      -webkit-animation: move-wave 3s;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
      background-image: url(@/assets/images/wave-top.png);
    }

    .waveMiddle {
      background-size: 50% 120px;
      animation: move_wave 10s linear infinite;
      background-image: url(@/assets/images/wave-mid.png);
    }

    .waveBottom {
      background-size: 50% 100px;
      background-image: url(@/assets/images/wave-bot.png);
      animation: move_wave 15s linear infinite;
    }
  }

  & #text {
    display: flex;
    position: relative;
    justify-content: center;
    margin: auto;
    // font-size: 3.5vw;
    font-size: 80px;
    font-weight: bold;
    font-family: "Ubuntu", sans-serif;
    color:var(--el-color-white);
    mix-blend-mode: lighten;
    text-transform: uppercase;
    user-select: none;
    z-index: 99;

    &:before,
    &:after {
      content: "TOLIE's BLOG";
      position: absolute;
      top: 0;
      width: 100%;
      // height: 100%;
      background: rgba(0, 0, 0, 0);
      clip: rect(0, 0, 0, 0);
      // z-index: 100;
      text-transform: uppercase;
    }

    &:before {
      left: -1px;
      text-shadow: 1px 0 #ff3f1a;
    }

    &:after {
      left: 1px;
      text-shadow: -1px 0 #00a7e0;
    }

    &:hover:before {
      text-shadow: 4px 0 #ff3f1a;
      animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
    }

    &:hover:after {
      text-shadow: -5px 0 #00a7e0;
      animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
    }
  }

  & #btn {
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 40px;
    //background: #fff;
    border: 1px solid #666;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 9;
    transform: translateY(100px);
  }
}

.sec {
  position: relative;
  width: 1000px;
  // height: 1000px;
  margin: 0 auto;

  // background: #1c0522;
  .infinite-list {
    // height: 1290px;
    padding: 0;
    margin: 0;
    list-style: none;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      margin: 30px 0 0 0;
      box-sizing: border-box;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
