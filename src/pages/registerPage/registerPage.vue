<template>
  <div class="register">
    <div class="form">
      <el-form :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input 
            v-model="form.name"
            type="text"
            placeholder="Please input name."
          />
        </el-form-item>
        <el-form-item label="Password">
          <el-input 
            v-model="form.password"
            type="password"
            placeholder="Please input password."
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import api from "@api";
const form = reactive({
  name: '',
  password: ''
});

onMounted(async () => {
  const res = await api.login.test();
  console.log(res);
});
const onSubmit = async () => {
  const { name, password } = form;
  const res = await api.login.register({
    data: {
      name,
      password
    }
  });
  console.log(res);
}
</script>

<style lang="css" scoped>
#register {
  width: 100%;
  height: 100%;
}
#register  .form {
    width: 200px;
  }
</style>