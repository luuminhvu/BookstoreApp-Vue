<template>
  <div class="parent">
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
