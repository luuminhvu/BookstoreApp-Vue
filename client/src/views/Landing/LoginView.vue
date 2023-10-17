<template lang="">
  <div class="login flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-3xl font-bold text-[#5b95c5]">Login</h1>
    <a-form
      class="mt-4 rounded-md p-4 border border-[#5b95c5] w-[400px]"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button
          :loading="loading"
          @click="login"
          class="bg-[#1677ff]"
          type="primary"
          html-type="submit"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
    <div class="mt-4">
      <router-link to="/register" class="text-[#131212]">
        Don't have an account? Register here
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { reactive, computed } from "vue";
const store = useStore();
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const loading = computed(() => {
  return store.state.loading;
});
const login = async (e) => {
  e.preventDefault();
  if (formState.username && formState.password) {
    await store.dispatch("auth/login", {
      username: formState.username,
      password: formState.password,
    });
  } else {
    alert("Please enter a username and password");
  }
};
</script>
<style lang=""></style>
