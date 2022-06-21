<template>
  <div class="myChild" @click="triggerEvent">我是子组件{{count}}</div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  count: {
    type: Number,
    default: 1
  }
});

const emits = defineEmits(['clickChild']);

const triggerEvent = () => {
  emits('clickChild');
}



</script>