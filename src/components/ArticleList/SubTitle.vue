<!-- author: TOLIE -->
<!-- date:  -->
<!-- description:  -->
<template>
  <div class="SubTitle">{{ title }}</div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// const props = {}
defineProps<{ title: string }>()

</script>
<style scoped lang='less'>
.SubTitle{
  background-color: antiquewhite;
}
</style>