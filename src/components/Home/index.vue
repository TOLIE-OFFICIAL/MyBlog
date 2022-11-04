<template>
  <div class="main">
    <img src="@/assets/images/stars.png" id="stars" style="left:0.25px">
    <img src="@/assets/images/moon.png" id="moon">
    <img src="@/assets/images/mountains_behind.png" id="mountains_behind">
    <h2 id="text" ref="text">Moon Light</h2>
    <!-- <a href="#sec" id="btn">Explore</a> -->
    <img src="@/assets/images/mountains_front.png" id="mountains_front">
  </div>
  <div class="sec" id="sec">
    <TopFeature class="TopFeature" title="START:DASH!!"></TopFeature>
    <MainFeature class="MainFeature" title="Discovery"></MainFeature>
  </div>


</template>

<script setup lang='ts'>
import { onMounted, onBeforeUnmount } from 'vue';
import MainFeature from './MainFeature/index.vue';
import TopFeature from './TopFeature/index.vue';

const value = ref(1)
// console.log(value);

// const text = ref<HTMLHeadingElement>();
onMounted(() => {
  const text = ref<HTMLHeadingElement>();
  const moon = ref<HTMLImageElement>();
  const mountains_behind = ref<HTMLImageElement>();
  const mountains_front = ref<HTMLImageElement>();
  const stars = ref<HTMLImageElement>();
  console.log(moon);
  // window.addEventListener('scroll', function(){
  //     let value = window.scrollY;
  //     stars.style.left = value * 0.25 + 'px'
  //     moon.style.top = value * 1.05 + 'px'
  //     mountains_behind.style.top = value * 0.5 + 'px'
  //     mountains_front.style.top = value * 0 + 'px'
  //     text.style.marginRight = value * 4 + 'px'
  //     text.style.marginTop = value * 1.5 + 'px'
  //     // btn.style.marginTop = value * 1.5 + 'px'
  //     // header.style.top = value * 0.5 + 'px'
  //   })
  
})
onBeforeUnmount(() => { })
// console.log(text);

// let stars = document.getElementById('stars')
//     let moon = document.getElementById('moon')
//     let mountains_behind = document.getElementById('mountains_behind')
//     let text = document.getElementById('text')
//     let btn = document.getElementById('btn')
//     let mountains_front = document.getElementById('mountains_front')
//     let header = document.querySelector('header')

//     window.addEventListener('scroll', function(){
//       let value = window.scrollY;
//       stars.style.left = value * 0.25 + 'px'
//       moon.style.top = value * 1.05 + 'px'
//       mountains_behind.style.top = value * 0.5 + 'px'
//       mountains_front.style.top = value * 0 + 'px'
//       text.style.marginRight = value * 4 + 'px'
//       text.style.marginTop = value * 1.5 + 'px'
//       btn.style.marginTop = value * 1.5 + 'px'
//       header.style.top = value * 0.5 + 'px'
//     })

</script>
<style scoped lang='less'>
/* 这是引入了一些字体 */
// @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Poppins', sans-serif;
//   /* 当用户手动导航或者 CSSOM scrolling API 触发滚动操作时 */
//   scroll-behavior: smooth;
// }

// body {
//   min-height: 100vh;
//   overflow-x: hidden;
//   background: linear-gradient(#2b1055,#7597de);
// }

// header {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding: 30px 100px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 10000;
// }

// header .logo {
//   color: #fff;
//   font-weight: 700;
//   text-decoration: none;
//   font-size: 2em;
//   text-transform: uppercase; /* 大写 */
//   letter-spacing: 2px; /* 字符间距 */
// }

// header ul {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// header ul li {
//   list-style: none;
//   margin-left: 20px;
// }

// header ul li a {
//   text-decoration: none;
//   padding: 6px 15px;
//   color: #fff;
//   border-radius: 20px;
// }

// header ul li a:hover,
// header ul li a.active {
//   background: #fff;
//   color: #2b1055;
// }

.main {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(#2b1055, #7597de);

  & ::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* object-fit CSS 属性指定可替换元素（例如：<img> 或 <video>）的内容应该如何适应到其使用高度和宽度确定的框。 */
    object-fit: cover;
    pointer-events: none;
  }

  & img#moon {
    /* mix-blend-mode CSS 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。 */
    mix-blend-mode: screen;
  }

  & img#mountains_front {
    z-index: 10;
  }
}



#text {
  position: absolute;
  right: -350px;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
}

#btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
}

.sec {
  position: relative;
  width: 1000px;
  margin: 0 auto;
  // padding: 100px;
  background: #1c0522;

  // & :deep(.el-card) {
  //   background: #1c0522;
  // }
}

.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
}

.sec p {
  font-size: 1em;
  color: #fff;
}
</style>