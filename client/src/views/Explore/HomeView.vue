<template>
  <div class="main h-full w-full">
    <div class="books">
      <div class="books-title justify-center items-center flex flex-col">
        <h1
          class="demo rainbow text-5xl font-bold text-center mb-4 text-[#813259]"
        >
          Welcome to the Bookstore
        </h1>
      </div>
      <div class>
        <a-carousel autoplay arrows class="z-9">
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
              <right-circle-outlined />
            </div>
          </template>
          <div class="">
            <img
              class="object-fit w-[100%] h-[400px]"
              src="@/assets/Phu-nu-viet-nam.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="object-fit w-[100%] h-[400px]"
              src="@/assets/website-scaled.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="object-fit w-[100%] h-[400px]"
              src="@/assets/website-scaled-1.png"
              alt=""
            />
          </div>
        </a-carousel>
      </div>
      <div
        class="mt-2 books-list xl:grid xl:grid-cols-3 xl:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-1 sm:gap-4"
      >
        <div
          v-for="book in books"
          :key="book._id"
          class="book flex flex-col items-center shadow-lg p-4 w-[100%] m-auto h-[100%] rounded-md hover:scale-105 transition-all duration-200"
        >
          <a-card hoverable style="width: 300px">
            <template #cover>
              <router-link :to="`/explore/books/${book._id}`">
                <img
                  class="h-[190px] w-[300px] object-fit"
                  alt="example"
                  :src="require(`@/assets/${book.image}`)"
                />
              </router-link>
            </template>
            <template #actions>
              <router-link :to="`/explore/books/${book._id}`">
                <info-circle-outlined key="info" />
              </router-link>
            </template>
            <a-card-meta>
              <template #title class="w-auto">
                <h3 class="break-all ... text-center font-bold text-[#813259]">
                  {{ book.title }}
                </h3>
              </template>
              <template #description>
                <h3 class="text-center">{{ book.price }} VNĐ</h3>
              </template>
              <!-- <template #avatar>
                <a-avatar
                  src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
                />
              </template> -->
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import {
  RightCircleOutlined,
  LeftCircleOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons-vue";
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
<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #750e0e;
  background-color: transparent;
  transition: ease all 0.3s;
  opacity: 1;
  z-index: 9;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #2b0c5e;
  opacity: 1;
}

:deep(.slick-slide h3) {
  color: #cf173f;
}
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
