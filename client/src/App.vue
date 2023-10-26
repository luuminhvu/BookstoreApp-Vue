<template>
  <div class="parent bg-[#f8ecd1] h-full w-full">
    <TheLoading v-show="loading" />
    <TheToast v-show="toastShow" />
    <router-view />
  </div>
</template>
<script setup>
import TheLoading from "./components/TheLoading.vue";
import TheToast from "./components/TheToast.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import * as dayjs from "dayjs";
import * as isLeapYear from "dayjs/plugin/isLeapYear"; // import plugin
import "dayjs/locale/zh-cn"; // import locale

dayjs.extend(isLeapYear); // use plugin
dayjs.locale("zh-cn");
const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});
const toastShow = computed(() => {
  return store.state.toast.show;
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}
</style>
