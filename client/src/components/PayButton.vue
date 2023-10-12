<template>
  <button
    :disabled="loading"
    @click="pay"
    class="btn bg-[#C92127] text-white py-2 px-3 rounded-md hover:bg-[#C92127] transition-all duration-200"
  >
    Pay
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { computed } from "vue";
import api from "@/services/api";
import { useStore } from "vuex";
const store = useStore();
const loading = computed(() => store.state.loading);
const props = defineProps({
  cartItems: Object,
});

const pay = async () => {
  store.commit("setLoading", true, { root: true });
  console.log(props.cartItems);
  try {
    const res = await api.post("/api/v1/orders/add", {
      cartItems: props.cartItems,
    });
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });

    //xoa localstorage
    localStorage.removeItem("cart");
    setTimeout(() => {
      window.location.href = "/explore/order/" + res.data.order.userId;
    }, 3000);
  } catch (err) {
    console.log(err);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: err.response.data.message,
      type: "error",
      show: true,
    });
  }
};
</script>

<style lang=""></style>
