<template>
  <div class="order-info grid grid-cols-2 gap-4">
    <div
      class="order-info__customer w-[50%] m-auto border border-teal-700 p-4 mt-3 mb-3 h-60"
    >
      <div class="">
        <h1 class="text-3xl font-bold mb-4 text-[#5b95c5] text-center">
          Hello {{ user.fullname }}
        </h1>
      </div>
      <label for="phone" class="block text-sm font-medium text-gray-700">
        Please enter your phone number
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        autocomplete="given-phone"
        v-model="newUser.phone"
        class="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-[50%] shadow-sm sm:text-sm rounded-md border-2 mb-2"
      />
      <label for="address" class="block text-sm font-medium text-gray-700">
        Please enter your address to receive the book
      </label>
      <input
        type="text"
        name="address"
        id="address"
        autocomplete="given-address"
        v-model="newUser.city"
        class="mt-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-[50%] shadow-sm sm:text-sm rounded-md mb-2"
      />
    </div>
    <div
      class="order-books w-[75%] m-auto border border-teal-700 p-4 mt-3 mb-3"
    >
      <h1 class="text-3xl font-bold mb-4 text-[#5b95c5] text-center">
        Your order
      </h1>
      <div
        class="order-books__table grid grid-cols-4 gap-4 font-bold text-xl text-center border-b-2 border-gray-200 pb-4"
      >
        <h3 class="text-lg font-bold mb-4 text-purple-600">Product</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Price</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Quantity</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Total</h3>
      </div>
      <div
        v-for="item in cart"
        :key="item._id"
        class="order-books__item grid grid-cols-4 gap-4 font-bold text-center my-4 text-[#143614] border-b-2 border-gray-200 pb-4"
      >
        <div class="order-books__item-name">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="order-books__item-price">
          <h3>{{ item.price }}</h3>
        </div>
        <div class="order-books__item-quantity">
          <h3>{{ item.quantity }}</h3>
        </div>
        <div class="order-books__item-total">
          <h3>{{ item.price * item.quantity }} VNĐ</h3>
        </div>
      </div>
      <div class="flex font-bold text-xl text-[#5b95c5] float-right">
        Total : {{ total }} VNĐ
      </div>
      <PayButton :cartItems="cartItems" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import PayButton from "@/components/PayButton.vue";
const store = useStore();
const userN = computed(() => store.state.auth.account);
const user = JSON.parse(userN.value);
const cart = computed(() => store.state.cart.cart);
const total = computed(() =>
  store.state.cart.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
);
const newUser = ref({
  phone: "",
  city: "",
});
const cartItems = computed(() => ({
  userId: user._id,
  items: cart.value,
  phone: newUser.value.phone,
  city: newUser.value.city,
  total: total.value,
}));
</script>

<style lang=""></style>
