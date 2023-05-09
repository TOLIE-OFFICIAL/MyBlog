<template>
  <div class="image-container" @mouseenter="zoomIn" @mouseleave="zoomOut">
    <div class="info" v-if="ifTop">
      <transition
        v-show="isZoomedIn"
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
        <div class="info-title">{{ title }}</div>
      </transition>
      <transition
        v-show="isZoomedIn"
        enter-active-class="animate__animated animate__slideInRight"
        leave-active-class="animate__animated animate__slideOutRight"
      >
        <div class="info-summary">
          {{ summary }}
        </div>
      </transition>
    </div>
    <img :style="zoomStyle" :src="imageUrl" />
  </div>
  <!-- <slot name="info"></slot> -->
</template>

<script lang="ts" setup>
const props = defineProps<{
  ifTop?: boolean;
  imageUrl: string;
  zoomFactor: number;
  title?: string;
  summary?: string;
}>();
// const ifPopup = ref(false)
const isZoomedIn = ref(false);
const zoomIn = () => {
  isZoomedIn.value = true;
};
const zoomOut = () => {
  isZoomedIn.value = false;
};
let zoomStyle = computed(() => {
  return {
    transform: isZoomedIn.value ? `scale(${props.zoomFactor})` : "scale(1)",
    transition: "transform .6s", // add a transition effect
  };
});
</script>

<style scoped lang="less">
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden; // hide overflow to prevent the image from expanding the container

  .info {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #333;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    opacity: 0;
    z-index: 999;
    transition: all 0.35s;
    &:hover {
      opacity: 1;
    }
    & div {
      width: 100%;
    }
    &-title {
      background: #111;
      background-color: #999;
      font-size: 8px;
      text-transform: uppercase;
      color: #fff;
    }
    &-summary {
      padding: 0 20px;
      margin-top: 15px;
      font-style: italic;
      font-size: 6px;
      text-align: left;
      color: #bbb;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // make sure the image fills the container without distorting
  }
}
</style>
