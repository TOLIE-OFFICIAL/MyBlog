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
      :style="{ transform: `translateY(${scrollY * 0.55}px)` }"
    >
      TOLIE's BLOG
    </h2>
  </div>
  <div class="sec" id="sec">
    <TopFeature class="TopFeature" title="START:DASH!!"></TopFeature>
    <MainFeature class="MainFeature" title="Discovery"></MainFeature>
  </div>
</template>

<script setup lang="ts">
// import anime from "animejs";
import { onMounted, onBeforeUnmount } from "vue";
import MainFeature from "./MainFeature/index.vue";
import TopFeature from "./TopFeature/index.vue";
const text = ref();
const scrollY = ref<number>(0);
const titlePosition = ref<number>(0);
const navHeight = ref<number>(0);
const getScrollY = () => {
  scrollY.value = window.scrollY;
  titlePosition.value = text.value?.offsetTop as number;
};
// const translate = function (element: HTMLElement) {
//   anime({
//     targets: element,
//     translateX: 500,
//     direction: "alternate",
//     loop: true,
//     easing: "ease",
//   });
// }
onBeforeMount(() => {
  navHeight.value = window.outerHeight;
});
onMounted(() => {
  // console.log(text.value?.offsetHeight);
  // translate(waveTop.value)
  // console.log(waveTop.value);

  window.addEventListener("scroll", getScrollY);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", getScrollY);
});
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
  position: relative;
  display: flex;
  background-image: url(@/assets/bg.jpg);
  //background-color: #666;
  // border-bottom: 1px solid #666;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  padding: 100px;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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
    font-size: 3.5vw;
    font-weight: bold;
    z-index: 99;
    font-family: "Ubuntu", sans-serif;
    color: #fff;
    width:520px;
    mix-blend-mode: lighten;
    text-transform: uppercase;

    &:before,
    &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0);
      clip: rect(0, 0, 0, 0);
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
  margin: 0 auto;
  background: #1c0522;
}
</style>
