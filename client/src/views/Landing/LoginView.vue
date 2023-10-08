<template lang="">
  <div class="login flex justify-center items-center min-h-screen text-center">
    <form class="login-box" @submit="(e) => login(e)">
      <h1 class="text-sky-500 text-2xl font-bold mb-4">Login</h1>
      <div
        class="box shadow text-[#2e9949] bg-white w-80 border-2 space-y-4 flex flex-col p-5 font-bold text-2xl"
      >
        <input
          v-model="user.username"
          type="text"
          placeholder="Username"
          class="input-field border outline-none px-3 py-2"
        />
        <input
          v-model="user.password"
          type="password"
          placeholder="Password"
          class="input-field border outline-none px-3 py-2"
        />
        <button
          :disabled="loading"
          class="btn bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 transition-all duration-200 disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed"
          type="submit"
        >
          Login
        </button>
      </div>
      <p class="text-gray-500 mt-4">
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { reactive, computed } from "vue";
const store = useStore();
const user = reactive({
  username: "",
  password: "",
});
const loading = computed(() => {
  return store.state.loading;
});
const login = async (e) => {
  e.preventDefault();
  if (user.username || user.password) {
    await store.dispatch("auth/login", user);
  } else {
    alert("Please enter a username and password");
  }
};
</script>
<style lang=""></style>
