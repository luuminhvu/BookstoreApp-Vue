<template lang="">
  <div>
    <nav
      class="navbar sticky top-0 left-0 bg-white p-4 flex flex-row items-center justify-between border-b-2 border-gray-200"
    >
      <router-link class="text-lg font-extrabold" to="/explore"
        >Home</router-link
      >
      <div class="search">
        <input
          type="text"
          placeholder="Search"
          class="outline-none border rounded-md px-6 py-3"
        />
      </div>
      <div class="links space-x-6">
        <router-link to="#" class="text-3xl">
          <ion-icon name="cart-outline"></ion-icon>
        </router-link>
        <router-link to="/explore/account" class="text-3xl">
          <ion-icon name="person-outline"></ion-icon>
        </router-link>
        <router-link to="/" class="text-3xl" @click="logout">
          <ion-icon name="log-out-outline"></ion-icon>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const logout = () => {
  store.dispatch("auth/logout");
};
</script>
<style lang=""></style>
