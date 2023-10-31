<template>
  <a-result v-show="code !== '00'" status="warning" title="Payment Failed">
    <template #extra>
      <a-button class="bg-[#1677ff]" key="console" type="primary"
        >Go Console</a-button
      >
    </template>
  </a-result>
  <a-result
    v-show="code === '00'"
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
  >
    <template #extra>
      <a-button key="console" type="primary" class="bg-[#1677ff]">
        <router-link :to="`/explore/order/${userNew._id}`"
          >Go Your Order</router-link
        >
      </a-button>
      <a-button key="buy">
        <router-link to="/explore">Buy Again</router-link>
      </a-button>
    </template>
  </a-result>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";
const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});
const route = useRoute();
const code = ref("");

const getCodeSuccess = async () => {
  try {
    // Set loading state to true
    store.commit("setLoading", true, { root: true });

    // Construct the query string from route.query
    const queryString = Object.keys(route.query)
      .map((key) => `${key}=${route.query[key]}`)
      .join("&");

    // Append the query string to the URL
    const apiUrl = `/api/v1/orders/vnpay_return/?${queryString}`;

    // Make the GET request
    const res = await api.get(apiUrl);

    // Set the code value from the response
    code.value = res.data.code;

    // Set loading state to false
    store.commit("setLoading", false, { root: true });
  } catch (error) {
    // Handle errors and set loading state to false
    store.commit("setLoading", false, { root: true });
  }
};
onMounted(() => {
  getCodeSuccess();
});
const user = computed(() => store.state.auth.account);
const userNew = JSON.parse(user.value);
</script>
