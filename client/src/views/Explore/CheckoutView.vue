<template>
  <div class="order-info grid grid-cols-2 gap-4">
    <div class="order-info__customer">
      <div class="">
        <h1 class="text-3xl font-bold mb-4 text-[#5b95c5]">
          hello {{ user.fullname }}
        </h1>
      </div>
      <label for="phone" class="block text-sm font-medium text-gray-700"
        >Phone</label
      >
      <input
        type="text"
        name="phone"
        id="phone"
        autocomplete="given-phone"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <label for="address" class="block text-sm font-medium text-gray-700"
        >Address</label
      >
      <input
        type="text"
        name="address"
        id="address"
        autocomplete="given-address"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <div class="order-books grid grid-cols-2 gap-4"></div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const userN = computed(() => store.state.auth.account);
const user = JSON.parse(userN.value);
console.log(user);
</script>
<style lang=""></style>
