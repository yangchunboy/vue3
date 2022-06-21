<template>
  <div class="home">
    <div @click="clickFun">这是首页{{ count }}</div>
    <my-child :count="count" @clickChild="clickFun" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import MyChild from "./components/MyChild.vue";

let count = ref(1);

const clickFun = () => {
  console.log(count);
  count.value++
};
</script>
<style lang="less" scoped>

</style>
