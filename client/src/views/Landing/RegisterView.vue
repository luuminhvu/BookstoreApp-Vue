<template lang="">
  <div
    class="register flex flex-col justify-center items-center min-h-screen text-center"
  >
    <h3 class="text-3xl font-bold text-[#5b95c5]">Register</h3>
    <a-form
      class="mt-4 rounded-md p-4 border border-[#5b95c5] w-[400px]"
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="fullname" label="Fullname" name="fullname">
        <a-input v-model:value="formState.fullname" />
      </a-form-item>
      <a-form-item ref="username" label="Username" name="username">
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item ref="password" label="Password" name="password">
        <a-input v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="Gender" name="gender">
        <a-select
          v-model:value="formState.gender"
          placeholder="please select your gender"
        >
          <a-select-option value="Male">Male</a-select-option>
          <a-select-option value="Femaie">Femaie</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="bg-[#1677ff]" type="primary" @click="onSubmit"
          >Create</a-button
        >
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
      <div class="mt-4">
        <router-link to="/login" class="text-[#131212]">
          Already have an account? Login here
        </router-link>
      </div>
    </a-form>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
const store = useStore();
const formRef = ref();
const formState = reactive({
  username: "",
  password: "",
  fullname: "",
  gender: "",
});
const labelCol = {
  span: 9,
};
const wrapperCol = {
  span: 20,
};

const rules = {
  fullname: [
    {
      required: true,
      message: "Please input your fullname",
      trigger: "change",
    },
    {
      min: 3,
      max: 30,
      message: "Please input your fullname between 3 to 30 characters",
      trigger: "blur",
    },
  ],
  username: [
    {
      required: true,
      message: "Please input your username",
      trigger: "change",
    },
    {
      min: 3,
      max: 30,
      message: "Please input your username between 3 to 30 characters",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
      trigger: "change",
    },
    {
      min: 6,
      max: 30,
      message: "Please input your password between 6 to 30 characters",
      trigger: "blur",
    },
  ],
  gender: [
    {
      require: true,
      message: "Please select your gender",
      trigger: "change",
    },
  ],
};
const loading = computed(() => {
  return store.state.loading;
});
const onSubmit = async () => {
  await store.dispatch("auth/register", formState);
};
const resetForm = () => {
  formRef.value.resetFields();
};
// const register = async (e) => {
//   e.preventDefault();
//   if (user.username || user.password) {
//     await store.dispatch("auth/register", user);
//   } else {
//     alert("Please enter a username and password");
//   }
// };
</script>
<style lang=""></style>
