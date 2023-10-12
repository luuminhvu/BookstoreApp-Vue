<template>
  <div>
    <nav
      class="navbar sticky top-0 left-0 bg-white p-4 flex flex-row items-center justify-between border-b-2 border-gray-200"
    >
      <div class="logo">
        <router-link to="/explore" class="text-3xl">
          <img
            class="w-36 h-16 object-cover"
            src="../assets/logo1.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="Search"
          class="outline-none border rounded-md px-6 py-3"
        />
      </div>
      <div class="links space-x-6">
        <router-link to="/explore/cart" class="text-3xl relative">
          <ion-icon name="cart-outline"></ion-icon>
          <span
            class="text-sm font-bold text-[#45af4e] absolute -top-2 -right-2 bg-black rounded-full w-5 h-5 flex justify-center items-center"
            >{{ cart.length }}</span
          >
        </router-link>
        <router-link to="/explore/account" class="text-3xl">
          <ion-icon name="person-outline"></ion-icon>
        </router-link>
        <router-link :to="`/explore/order/${userNew._id}`" class="text-3xl">
          <ion-icon name="wallet-outline">Ư</ion-icon>
        </router-link>

        <router-link to="/" class="text-3xl" @click="logout">
          <ion-icon name="log-out-outline"></ion-icon>
        </router-link>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const logout = () => {
  store.dispatch("auth/logout");
};
const user = computed(() => store.state.auth.account);
const userNew = JSON.parse(user.value);
const cart = computed(() => store.state.cart.cart);
</script>
<style lang=""></style>
