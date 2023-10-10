<template>
  <div v-if="cart.length > 0">
    <div class="cart p-4 m-auto">
      <div class="cart-title">
        <h1 class="text-3xl font-bold text-center mb-4 text-blue-500">
          Your Cart
        </h1>
      </div>
      <div class="cart-table grid align-center rounded-md">
        <div
          class="cart-field grid grid-cols-5 gap-4 font-bold text-xl text-center border-b-2 border-gray-200 pb-4"
        >
          <h3 class="text-lg font-bold mb-4 text-purple-600">Product</h3>
          <h3 class="text-lg font-bold mb-4 text-yellow-600">Price</h3>
          <h3 class="text-lg font-bold mb-4 text-yellow-600">Quantity</h3>
          <h3 class="text-lg font-bold mb-4 text-yellow-600">Total</h3>
          <h3 class="text-lg font-bold mb-4 text-yellow-600">Remove</h3>
        </div>
      </div>
      <div class="cart-items grid align-center bg-red-300 rounded-md">
        <div
          v-for="item in cart"
          :key="item._id"
          class="cart-item grid grid-cols-5 gap-4 font-bold text-center my-4 text-[#143614] border-b-2 border-gray-200 pb-4"
        >
          <div class="cart-item-name">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="cart-item-price">
            <h3>{{ item.price }}</h3>
          </div>
          <div class="cart-item-quantity">
            <button
              @click="increaseCart(item)"
              class="btn bg-pink-700 text-white py-2 px-3 rounded-md hover:bg-pink-800 transition-all duration-200 mr-2"
            >
              +
            </button>
            {{ item.quantity }}
            <button
              @click="decreaseCart(item)"
              class="btn bg-emerald-300 text-white py-2 px-3 rounded-md hover:bg-emerald-400 transition-all duration-200 ml-2"
            >
              -
            </button>
          </div>
          <div class="cart-item-total">
            <h3>{{ item.price * item.quantity }} VNĐ</h3>
          </div>
          <div class="cart-item-remove">
            <button
              @click="deleteCart(item)"
              class="btn bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-all duration-200"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <button
        @click="clearCart"
        class="btn bg-[#221d1e] text-white py-2 px-3 rounded-md hover:bg-[#C92127] transition-all duration-200 mt-4"
      >
        Clear All
      </button>
      <div
        class="cart-total w-[300px] h-[100px] bg-[#4d4242] rounded-md flex flex-col justify-center items-center mt-4"
      >
        <h1 class="text-lg font-bold mb-4 text-[#da7d52]">Total:</h1>
        <h1 class="text-lg font-bold mb-4 text-[#C92127]">
          {{ cartTotal }} VNĐ
        </h1>
      </div>
      <div class="cart-checkout flex flex-row justify-center items-center">
        <router-link
          to="/explore/checkout"
          class="btn bg-[#C92127] text-white py-2 px-3 rounded-md hover:bg-[#C92127] transition-all duration-200"
        >
          Checkout
        </router-link>
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
