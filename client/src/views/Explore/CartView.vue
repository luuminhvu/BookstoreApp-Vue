<template>
  <div v-if="cart.length > 0">
    <div class="h-screen bg-gray-100 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold">Your Cart</h1>
      <div
        class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
      >
        <div class="rounded-lg md:w-2/3">
          <div
            v-for="item in cart"
            :key="item._id"
            class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
          >
            <img
              src="@/assets/phuongphapthugian.png"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  {{ item.title }}
                </h2>
                <p class="mt-1 text-sm text-gray-700">{{ item.price }} VNĐ</p>
              </div>
              <div
                class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
              >
                <div class="flex items-center border-gray-100">
                  <button
                    @click="decreaseCart(item)"
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    -
                  </button>
                  <span
                    class="h-8 w-8 border bg-white text-center text-xs outline-none items-center flex justify-center"
                  >
                    {{ item.quantity }}
                  </span>
                  <button
                    @click="increaseCart(item)"
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    +
                  </button>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">{{ item.price * item.quantity }} VNĐ</p>
                  <svg
                    @click="deleteCart(item)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Sub total -->
        <div
          class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
        >
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{{ cartTotal }} VNĐ</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">0 VNĐ</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{{ cartTotal }} VNĐ</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <router-link
            to="/explore/checkout"
            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 p-3"
          >
            Check out
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="cart-empty flex flex-col justify-center items-center">
      <h1 class="text-3xl font-bold text-center mb-4 text-blue-500">
        Your Cart is Empty
      </h1>
      <router-link
        to="/explore"
        class="btn bg-[#C92127] text-white py-2 px-3 rounded-md hover:bg-[#C92127] transition-all duration-200"
      >
        Go to Explore
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

const cart = computed(() => store.state.cart.cart);
const cartTotal = computed(() => store.state.cart.cartTotalAmount);

// Thêm một watch để theo dõi sự thay đổi trong cart và tính lại tổng khi cần
watch(cart, () => {
  store.dispatch("cart/getTotals");
});
onMounted(() => {
  store.dispatch("cart/getTotals");
});
const clearCart = () => {
  store.dispatch("cart/clearCart");
};
const deleteCart = (item) => {
  store.dispatch("cart/deleteCart", item);
};

const decreaseCart = (item) => {
  store.dispatch("cart/decreaseCart", item);
};

const increaseCart = (item) => {
  store.dispatch("cart/increaseCart", item);
};
</script>

<style lang=""></style>
