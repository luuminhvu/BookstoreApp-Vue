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
          class="search-result border w-[300px] absolute z-999 mt-2 rounded-md px-4 py-2 bg-[#379c7e]"
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
        <router-link
          :to="`/explore/order/${userNew._id}`"
          class="text-3xl relative"
        >
          <ion-icon name="wallet-outline"></ion-icon>
          <span
            class="text-sm font-bold text-[#45af4e] absolute -top-2 -right-2 bg-black rounded-full w-5 h-5 flex justify-center items-center"
            >{{ order.length }}</span
          >
        </router-link>

        <router-link to="/" class="text-3xl" @click="logout">
          <ion-icon name="log-out-outline"></ion-icon>
        </router-link>
      </div>
    </nav>
  </div>
  <router-view></router-view>

  <!-- component -->
  <div class="flex items-end w-full bg-white">
    <footer class="w-full text-gray-700 bg-gray-100 body-font">
      <div
        class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap"
      >
        <div
          class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
        >
          <a
            class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
          >
            <img
              class="w-10 h-10 bg-gray-200"
              src="../assets/logo1.png"
              alt=""
            />
            <span class="ml-3 text-xl">Bookstore</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Story about us will be here soon
          </p>
          <div class="mt-4">
            <span
              class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
            >
              <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div
          class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left"
        >
          <div class="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2
              class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
            >
              About
            </h2>
            <nav class="mb-10 list-none">
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Company</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Careers</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Blog</a
                >
              </li>
            </nav>
          </div>
          <div class="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2
              class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
            >
              Support
            </h2>
            <nav class="mb-10 list-none">
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Contact Support</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Help Resources</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Release Updates</a
                >
              </li>
            </nav>
          </div>
          <div class="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2
              class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
            >
              Platform
            </h2>
            <nav class="mb-10 list-none">
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Terms &amp; Privacy</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Pricing</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >FAQ</a
                >
              </li>
            </nav>
          </div>
          <div class="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2
              class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
            >
              Contact
            </h2>
            <nav class="mb-10 list-none">
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Send a Message</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >Request a Quote</a
                >
              </li>
              <li class="mt-3">
                <a class="text-gray-500 cursor-pointer hover:text-gray-900"
                  >+123-456-7890</a
                >
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-300">
        <div class="container px-5 py-4 mx-auto">
          <p class="text-sm text-gray-700 capitalize xl:text-center">
            © 2020 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import api from "@/services/api";
const store = useStore();
const logout = () => {
  store.dispatch("auth/logout");
};
const books = ref([]);
const search = ref("");
const order = ref([]);
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

const getOrder = async () => {
  const res = await api.get("/api/v1/orders/" + userNew._id);
  order.value = res.data;
  console.log(order.value);
};
onMounted(() => {
  getOrder();
});
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
