<template>
  <div class="main">
    <div class="books">
      <div class="books-title justify-center items-center flex flex-col">
        <h1 class="text-3xl font-bold text-center mb-4 text-[#5b95c5]">
          Welcome to the Bookstore
        </h1>
      </div>
      <div class="books-list grid grid-cols-3 gap-3">
        <div
          v-for="book in books"
          :key="book._id"
          class="book flex flex-col items-center shadow-lg p-4 w-[300px] m-auto h-[400px] rounded-md bg-green-200"
        >
          <router-link :to="`/explore/books/${book._id}`">
            <img
              class="w-36 h-48 object-cover mb-3 rounded-md bg-white"
              src="http://placekitten.com/300/400"
              alt=""
            />
          </router-link>
          <h1
            class="text-lg font-bold w-[250px] h-[100px] text-center mb-4 text-[#b1449f]"
          >
            {{ book.title }}
          </h1>
          <h1 class="text-lg font-bold text-center mb-4 text-[#da7d52]">
            {{ book.category }}
          </h1>
          <h1 class="text-lg font-bold text-[#C92127]">
            {{ book.price.toString() }} VNĐ
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import api from "@/services/api";
const books = ref([]);
const getBooks = async () => {
  const res = await api.get("/api/v1/books");
  books.value = res.data.books;
};

onMounted(() => {
  getBooks();
});
</script>
<style lang=""></style>
