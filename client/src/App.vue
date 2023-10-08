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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
