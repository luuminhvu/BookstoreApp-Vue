<template>
  <a-result status="success" title="Successfully Purchased Cloud Server ECS!">
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
import { computed } from "vue";
const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});
const user = computed(() => store.state.auth.account);
const userNew = JSON.parse(user.value);
</script>
