<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <router-link class="bg-[#1677ff] p-3 rounded text-white" to="/explore"
        >Back Home
      </router-link>
    </template>
  </a-result>
</template>
<script setup></script>
<style scoped></style>
