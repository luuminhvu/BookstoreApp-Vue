<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const toastOptions = computed(() => {
  return store.state.toast;
});
</script>
<template>
  <div
    class="toast fixed top-3 right-0 w-full flex items-center justify-center"
  >
    <div
      :class="[
        'toast-box bg-white shadow-md border-2 py-2 px-4 rounded-md',
        toastOptions.type === 'error'
          ? 'border-red-500'
          : toastOptions.type === 'success'
          ? 'border-green-500'
          : 'border-yellow-500',
      ]"
    >
      <p class="toast-msg">{{ toastOptions.message }}</p>
    </div>
  </div>
</template>

<style scoped>
.toast-box {
  animation: toast 3s ease-in-out;
}
@keyframes toast {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>
