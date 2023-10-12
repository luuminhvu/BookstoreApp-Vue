<template>
  <div class="myOrder mt-6" v-if="order.length > 0">
    <div class="myOrder-title justify-center items-center">
      <h1 class="text-3xl font-bold text-center mb-4 text-[#5b95c5]">
        My Order
      </h1>
    </div>
    <div class="myOrder-table">
      <div
        class="myOrder-field grid grid-cols-6 gap-4 font-bold text-xl text-center border-b-2 border-gray-200 pb-4"
      >
        <h3 class="text-lg font-bold mb-4 text-purple-600">Product</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Phone</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Address</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Status</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Total</h3>
        <h3 class="text-lg font-bold mb-4 text-yellow-600">Remove</h3>
      </div>
      <div
        v-for="item in order"
        :key="item._id"
        class="myOrder-item grid grid-cols-6 gap-4 font-bold text-center my-4 text-[#143614] border-b-2 border-gray-200 pb-4"
      >
        <div class="myOrder-item-name">
          <div class="myOrder-item-names" v-for="book in item.books">
            <h3>{{ book.title }}</h3>
          </div>
        </div>
        <div class="myOrder-item-phone">
          <h3>{{ item.phone }}</h3>
        </div>
        <div class="myOrder-item-address">
          <h3>{{ item.address }}</h3>
        </div>
        <div class="myOrder-item-status">
          <h3>{{ item.status }}</h3>
        </div>
        <div class="myOrder-item-total">
          <h3>{{ item.totalAmount }} VNĐ</h3>
        </div>
        <div class="myOrder-item-remove">
          <button
            @click="deleteOrder(item)"
            class="btn bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-all duration-200"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="myOrder mt-6" v-else>
    <h1 class="text-3xl font-bold text-center mb-4 text-[#5b95c5]">
      You have no order
    </h1>
  </div>
</template>
<script setup>
import api from "@/services/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();
const userId = route.params.id;
const order = ref([]);
const getOrder = async () => {
  const res = await api.get("/api/v1/orders/" + userId);
  order.value = res.data;
};
onMounted(() => {
  getOrder();
});
const deleteOrder = async (item) => {
  try {
    store.commit("setLoading", true, { root: true });
    const res = await api.delete("/api/v1/orders/" + item._id);
    console.log(res);
    getOrder();
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
  } catch {
    store.commit("setLoading", false);
    store.commit("setToast", {
      status: true,
      message: err.response.data.message,
      type: "error",
    });
  }
};
</script>
<style lang=""></style>
