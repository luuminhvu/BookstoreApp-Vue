<template>
  <div
    class="account-page min-h-screen flex bg-white justify-center items-start"
  >
    <div
      class="account flex flex-col justify-center items-center w-[800px] py-12"
    >
      <div class="account-content space-y-6 w-[500px]">
        <div class="input-field mt-4 flex flex-col">
          <label for="fullname">Fullname : {{ account.fullname }}</label>
        </div>

        <div class="input-field mt-4 flex flex-col">
          <label for="password" class="text-gray-500">Current Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="border outline-none px-2 py-2 rounded-md"
          />
        </div>
        <div class="input-field mt-4 flex flex-col">
          <label for="newPassword" class="text-gray-500">New Password</label>
          <input
            v-model="newPassword"
            type="password"
            id="newPassword"
            class="border outline-none px-2 py-2 rounded-md"
          />
        </div>
      </div>
      <div class="account-buttons flex flex-row space-x-4 mt-10">
        <button
          @click="changePassword"
          :disabled="loading"
          class="btn bg-sky-500 text-white py-2 px-3 rounded-md hover:bg-sky-600 transition-all duration-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import jsCookie from "js-cookie";
import { reactive, computed, ref } from "vue";
import api from "@/services/api";
import { setHeaders } from "@/services/isAdmin";
const account = reactive(JSON.parse(jsCookie.get("account")));
import { useStore } from "vuex";
const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});
const password = ref("");
const newPassword = ref("");
const changePassword = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.put(
      `/api/v1/accounts/change-password/${account._id}`,
      {
        id: account._id,
        password: password.value,
        newPassword: newPassword.value,
      },
      setHeaders()
    );
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
    jsCookie.remove("account");
    jsCookie.set("account", JSON.stringify(res.data.user));
    setTimeout(() => {
      window.location.href = "/explore/account";
    }, 3000);
  } catch (error) {
    console.log(error);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: error.response.data.msg,
      type: "error",
      show: true,
    });
  }
};
</script>
<style lang=""></style>
