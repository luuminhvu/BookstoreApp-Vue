<template lang="">
  <div
    class="register flex justify-center items-center min-h-screen text-center"
  >
    <form class="register-box" @submit="(e) => register(e)">
      <h1 class="text-sky-500 text-2xl font-bold mb-4">Register</h1>
      <div
        class="box shadow text-[#2e9949] bg-white w-80 border-2 space-y-4 flex flex-col p-5 font-bold text-2xl"
      >
        <input
          v-model="user.fullname"
          type="text"
          placeholder="Fullname"
          class="input-field border outline-none px-2 py-2"
        />
        <input
          v-model="user.username"
          type="text"
          placeholder="Username"
          class="input-field border outline-none px-2 py-2"
        />
        <input
          v-model="user.password"
          type="password"
          placeholder="Password"
          class="input-field border outline-none px-2 py-2"
        />
        <select
          v-model="user.gender"
          placeholder="Gender"
          class="input-field border outline"
        >
          <option selected disabled>Choose Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="">Don't know</option>
        </select>
        <button
          :disabled="loading"
          class="btn bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 transition-all duration-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
          type="submit"
        >
          Register
        </button>
      </div>
      <p class="text-gray-500 mt-4">
        Already have an account?
        <router-link to="/login">Login</router-link>
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
  fullname: "",
  gender: "",
});
const loading = computed(() => {
  return store.state.loading;
});
const register = async (e) => {
  e.preventDefault();
  if (user.username || user.password) {
    await store.dispatch("auth/register", user);
  } else {
    alert("Please enter a username and password");
  }
};
</script>
<style lang=""></style>
