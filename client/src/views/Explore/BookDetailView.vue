<template>
  <div class="demo rainbow text-3xl font-bold text-center mb-4 text-[#5b95c5]">
    Welcome to the Bookstore
  </div>
  <div class="book m-auto w-[1000px] mt-8">
    <div class="book-detail grid grid-cols-2 gap-4">
      <div class="book-detail-img border-r-2 border-gray-200 border-l-2">
        <img
          class="w-80 h-96 object-cover mb-3 rounded-md bg-white m-auto"
          src="@/assets/lamgiauquachungkhoan.jpg"
          alt=""
        />
      </div>
      <div
        class="book-detail-info border-r-2 border-gray-200 flex flex-col justify-between"
      >
        <h1 class="text-lg font-bold mb-4 text-[#b1449f]">
          {{ book.title }}
        </h1>
        <h1 class="text-lg font-bold mb-4 text-[#da7d52]">
          Nhà xuất bản : {{ book.category }}
        </h1>

        <div class="book-price">
          <h1 class="text-lg font-bold text-[#C92127]">
            {{ book.price }} VNĐ
            <span class="text-sm line-through ml-2"> "> 98000 đ </span>
            <span class="">
              <span class="bg-[#C92127] text-white px-2 py-1 rounded-md ml-2">
                98% off
              </span>
            </span>
          </h1>
        </div>
        <div class="book-quantity mt-3">
          <h1 class="text-lg font-bold mb-4 text-[#da7d52]">Số lượng:</h1>
          <input
            v-model="quantity"
            type="number"
            class="border-2 border-gray-200 rounded-md w-40 h-10 px-2 py-1"
            min="1"
          />
          <div class="book-addToCart mt-5">
            <button
              class="bg-[#C92127] text-white px-2 py-1 rounded-md flex flex-row items-center"
              @click="addToCart"
            >
              <ion-icon
                class="mr-2 text-xl text-white align-center"
                name="cart-outline"
              ></ion-icon>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="book-detail-desc mt-3 border-t-2 border-gray-200">
      <h1 class="text-lg font-bold mb-4 text-[#da7d52] mt-8">
        {{ book.desc }}
      </h1>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, watch } from "vue";
import api from "@/services/api";
//get params from URL
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
let id = route.params.id;
watch(
  () => route.params.id,
  () => {
    id = route.params.id;
    if (id) {
      getBook();
    }
  }
);
const book = ref([]); // Initialize quantity with a default value of 1
const quantity = ref(1);
const store = useStore();

const getBook = async () => {
  const res = await api.get(`/api/v1/books/${id}`);
  book.value = res.data.book;
};

onMounted(() => {
  if (id) {
    getBook();
  }
});

const addToCart = () => {
  const cartItem = {
    id: book.value._id,
    title: book.value.title,
    price: book.value.price,
    quantity: quantity.value,
  };
  store.dispatch("cart/addToCart", cartItem);
};
</script>

<style scoped>
.demo {
  text-align: center;
}

.rainbow-bg {
  animation: rainbow-bg 2.5s linear;
  animation-iteration-count: infinite;
}

.rainbow {
  animation: rainbow 2.5s linear;
  animation-iteration-count: infinite;
}

@keyframes rainbow-bg {
  100%,
  0% {
    background-color: rgb(255, 0, 0);
  }
  8% {
    background-color: rgb(255, 127, 0);
  }
  16% {
    background-color: rgb(255, 255, 0);
  }
  25% {
    background-color: rgb(127, 255, 0);
  }
  33% {
    background-color: rgb(0, 255, 0);
  }
  41% {
    background-color: rgb(0, 255, 127);
  }
  50% {
    background-color: rgb(0, 255, 255);
  }
  58% {
    background-color: rgb(0, 127, 255);
  }
  66% {
    background-color: rgb(0, 0, 255);
  }
  75% {
    background-color: rgb(127, 0, 255);
  }
  83% {
    background-color: rgb(255, 0, 255);
  }
  91% {
    background-color: rgb(255, 0, 127);
  }
}

@keyframes rainbow {
  100%,
  0% {
    color: rgb(255, 0, 0);
  }
  8% {
    color: rgb(255, 127, 0);
  }
  16% {
    color: rgb(255, 255, 0);
  }
  25% {
    color: rgb(127, 255, 0);
  }
  33% {
    color: rgb(0, 255, 0);
  }
  41% {
    color: rgb(0, 255, 127);
  }
  50% {
    color: rgb(0, 255, 255);
  }
  58% {
    color: rgb(0, 127, 255);
  }
  66% {
    color: rgb(0, 0, 255);
  }
  75% {
    color: rgb(127, 0, 255);
  }
  83% {
    color: rgb(255, 0, 255);
  }
  91% {
    color: rgb(255, 0, 127);
  }
}
</style>
