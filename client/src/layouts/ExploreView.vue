<template>
  <div>
    <nav
      class="navbar sticky top-0 left-0 bg-white p-4 flex flex-row items-center justify-between border-b-2 border-gray-200"
    >
      <div class="logo sm:hidden md:hidden lg:block xl:block">
        <router-link to="/explore" class="text-3xl">
          <img
            class="w-36 h-16 object-cover"
            src="../assets/logo1.png"
            alt=""
          />
        </router-link>
      </div>

      <div class="search">
        <a-input-search
          v-model:value="search"
          @focusout="hideSearchResults"
          @focus="showSearchResults"
          @input="debouncedSearchInput"
          loading
          placeholder="Search books"
          class="relative rounded-md border border-[#379c7e] text-white"
        />
        <div
          class="search-result border w-[300px] absolute z-10 mt-2 rounded-md px-4 py-2 bg-[#379c7e]"
          v-show="searchShow && books.length > 0"
        >
          <router-link
            v-for="book in books"
            :to="`/explore/books/${book._id}`"
            :key="book._id"
          >
            <div class="search-result-item rounded-md">
              <h1
                class="text-sm font-bold mb-4 text-[#ebc04a] py-1 hover:text-white transition-all duration-200"
              >
                {{ book.title }}
              </h1>
            </div>
          </router-link>
        </div>
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
          <ion-icon name="wallet-outline"></ion-icon>
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
import { computed, ref } from "vue";
import api from "@/services/api";
const store = useStore();
const logout = () => {
  store.dispatch("auth/logout");
};
const books = ref([]);
const search = ref("");
const searchShow = ref(false);
const searchTimeout = ref(null);

const resetSearchTimeout = () => {
  clearTimeout(searchTimeout.value);
};

const debouncedSearchInput = () => {
  // Clear the previous timeout (if any) to debounce the input
  resetSearchTimeout();

  // Set a new timeout to delay the search request
  searchTimeout.value = setTimeout(async () => {
    if (search.value.trim() === "") {
      // If the search input is empty, hide the results
      searchShow.value = false;
      books.value = [];
      return;
    }

    const res = await api.get(`/api/v1/books/search/${search.value}`);
    books.value = res.data.books;
    searchShow.value = true; // Show the search results when there are results
  }, 300); // Adjust the debounce delay as needed
};

const user = computed(() => store.state.auth.account);
const userNew = JSON.parse(user.value);
const cart = computed(() => store.state.cart.cart);

const showSearchResults = () => {
  if (books.value.length > 0) {
    searchShow.value = true;
  }
};

const hideSearchResults = () => {
  searchShow.value = false;
};
</script>

<style lang=""></style>
