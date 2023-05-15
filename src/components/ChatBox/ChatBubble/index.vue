<template>
  <div class="chat-bubble" :class="{ sent: sentByMe, received: !sentByMe }">
    <div class="triangle"></div>
    <div class="message">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
const Props = defineProps<{
  sentByMe: boolean;
  text: string;
}>();
</script>

<style lang="less" scoped>
.chat-bubble {
  display: inline-block;
  position: relative;
  max-width: 70%;
  padding: 7px;
  border-radius: 7px;
  color: #fff;
  font-size: 6px;
  line-height: 1.4;
}

.sent {
  background-color: #0084ff;
  align-self: flex-end;
}

.received {
  background-color: #aaa;
  align-self: flex-start;
}
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border: 3px solid;
}

.sent .triangle {
  border-color: transparent transparent transparent #0084ff;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
}

.received .triangle {
  border-color: transparent #aaa transparent transparent;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
