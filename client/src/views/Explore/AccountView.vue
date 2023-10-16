<template>
  <div
    class="account-page min-h-screen flex bg-white justify-center items-start"
  >
    <div
      class="account flex flex-col justify-center items-center w-[800px] py-12"
    >
      <div class="account-img shadow-md w-32 mb-10">
        <img
          class="w-full object-cover rounded"
          :src="`https://api.dicebear.com/7.x/initials/svg?seed=${account.fullname}`"
          alt=""
        />
      </div>
      <div class="account-content space-y-6 w-[500px]">
        <div class="input-field mt-4 flex flex-col">
          <label for="fullname">Fullname</label>
          <input
            v-model="account.fullname"
            type="text"
            id="fullname"
            class="border outline-none px-2 py-2 rounded-md"
          />
        </div>
        <div class="input-field mt-4 flex flex-col">
          <label for="username">Username</label>
          <input
            v-model="account.username"
            type="text"
            id="username"
            class="border outline-none px-2 py-2 rounded-md"
          />
        </div>
        <div class="input-field">
          <select class="border outline-none px-2 py-2 rounded-md">
            <option :selected="account.gender === 'Male'" value="Male">
              Male
            </option>
            <option :selected="account.gender === 'Female'" value="Female">
              Female
            </option>
            <option :selected="account.gender === 'Unknown'" value="Unknown">
              Don't know
            </option>
          </select>
        </div>
        <div class="input-field mt-4 flex flex-col">
          <label for="age" class="text-gray-500">Age</label>
          <input
            v-model="account.age"
            type="number"
            id="age"
            class="border outline-none px-2 py-2 rounded-md"
          />
        </div>
        <div class="input-field mt-4 flex flex-col">
          <label for="city" class="text-gray-500">City</label>
          <input
            v-model="account.city"
            type="text"
            id="city"
            class="border outline-none px-2 py-2 rounded-md"
          />
        </div>
      </div>
      <div class="account-buttons flex flex-row space-x-4 mt-10">
        <button
          @click="updateUser"
          :disabled="loading"
          class="btn bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 transition-all duration-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          Save
        </button>
        <button
          @click="deleteUser"
          :disabled="loading"
          class="btn bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-all duration-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          Delete
        </button>
        <router-link
          class="btn bg-gray-500 text-white py-2 px-3 rounded-md hover:bg-gray-600 transition-all duration-200"
          to="/explore/change-password"
          >Change Password</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import jsCookie from "js-cookie";
import { reactive, computed } from "vue";
import api from "@/services/api";
const account = reactive(JSON.parse(jsCookie.get("account")));
import { useStore } from "vuex";
const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});
const updateUser = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    console.log(account);
    const res = await api.put(`/api/v1/accounts/${account._id}`, { account });
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
    jsCookie.remove("account");
    jsCookie.set("account", JSON.stringify(res.data.user));
    console.log(res);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (err) {
    console.log(err);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: err.response.data.message,
      type: "error",
      show: true,
    });
  }
};
const deleteUser = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.delete(`/api/v1/accounts/${account._id}`);
    jsCookie.remove("token");
    jsCookie.remove("account");
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  } catch (err) {
    console.log(err);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: err.response.data.message,
      type: "error",
      show: true,
    });
  }
};
</script>

<style lang=""></style>
