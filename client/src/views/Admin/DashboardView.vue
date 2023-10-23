<template>
  <section id="main-body" class="md:w-5/6 w-full m-auto">
    <div class="p-2">
      <div class="flex flex-wrap justify-between">
        <div class="md:w-1/4 sm:w-1/2 w-full">
          <div
            class="border-2 card1 border-gray-50 shadow-lg m-4 p-2 bg-orange-500"
          >
            <a href="" class="leading-10">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-2xl leading-10">{{ orders.length }}</p>
                  <p class="text-lg leading-10">Orders</p>
                </div>
                <div>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </i>
                </div>
              </div>
              <div class="border-t-2 border-white"></div>
              <div class="flex justify-between items-center">
                <p class="text-sm leading-10">
                  Last Update: {{ moment().format("DD MMM YY HH:mm") }}
                </p>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </i>
              </div>
            </a>
          </div>
        </div>
        <div class="md:w-1/4 sm:w-1/2 w-full">
          <div
            class="card2 border-2 border-gray-50 shadow-lg m-4 p-2 bg-red-700"
          >
            <a href="" class="leading-10">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-2xl leading-10">{{ books.length }}</p>
                  <p class="text-lg leading-10">Books</p>
                </div>
                <div>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </i>
                </div>
              </div>
              <div class="border-t-2 border-white"></div>
              <div class="flex justify-between items-center">
                <p class="text-sm leading-10">
                  Last Update: {{ moment().format("DD MMM YY HH:mm") }}
                </p>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </i>
              </div>
            </a>
          </div>
        </div>
        <div class="md:w-1/4 sm:w-1/2 w-full">
          <div
            class="card3 border-2 border-gray-50 shadow-lg m-4 p-2 bg-yellow-400"
          >
            <a href="" class="leading-10">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-2xl leading-10">{{ users.length }}</p>
                  <p class="text-lg leading-10">Users</p>
                </div>
                <div>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </i>
                </div>
              </div>
              <div class="border-t-2 border-white"></div>
              <div class="flex justify-between items-center">
                <p class="text-sm leading-10">
                  Last Update: {{ moment().format("DD MMM YY HH:mm") }}
                </p>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </i>
              </div>
            </a>
          </div>
        </div>
        <div class="md:w-1/4 sm:w-1/2 w-full">
          <div
            class="card4 border-2 border-gray-50 shadow-lg m-4 p-2 bg-green-600"
          >
            <a href="" class="leading-10">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-2xl leading-10">{{ getTotalRevenue() }} VNĐ</p>
                  <p class="text-lg leading-10">Total Revenue</p>
                </div>
                <div>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </i>
                </div>
              </div>
              <div class="border-t-2 border-white"></div>
              <div class="flex justify-between items-center">
                <p class="text-sm leading-10">
                  Last Update: {{ moment().format("DD MMM YY HH:mm") }}
                </p>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 px-4 bg-zinc-950 rounded-lg shadow-lg">
      <hr />

      <h2 class="text-lg font-semibold p-2 dark:text-gray-50">User Section</h2>
      <h4 class="text-base text-gray-500 p-1 dark:text-gray-200">
        This Section Show Your User Information
      </h4>
      <p class="p-2 dark:text-gray-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio
        nobis voluptas? Fugit maiores repellat aut commodi in. Nobis officiis
        blanditiis sequi iste molestias pariatur ut nam corrupti provident
        distinctio consequatur iure enim praesentium necessitatibus aliquid,
        numquam exercitationem error fuga tempora, voluptatum omnis eveniet
        harum fugit aut? Tempore, ea. Nisi.
      </p>
      <p class="p-2 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        similique mollitia voluptas deserunt autem debitis repudiandae nulla, id
        harum distinctio numquam quod quibusdam. Dolorem ex iste accusantium
        doloribus culpa tempore fugiat commodi expedita, doloremque sed facere
        magni et totam unde ipsa fugit repudiandae eos quo cupiditate. Aliquid
        vero debitis recusandae!
      </p>
      <p class="p-2 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        similique mollitia voluptas deserunt autem debitis repudiandae nulla, id
        harum distinctio numquam quod quibusdam. Dolorem ex iste accusantium
        doloribus culpa tempore fugiat commodi expedita, doloremque sed facere
        magni et totam unde ipsa fugit repudiandae eos quo cupiditate. Aliquid
        vero debitis recusandae!
      </p>
      <p class="p-2 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        similique mollitia voluptas deserunt autem debitis repudiandae nulla, id
        harum distinctio numquam quod quibusdam. Dolorem ex iste accusantium
        doloribus culpa tempore fugiat commodi expedita, doloremque sed facere
        magni et totam unde ipsa fugit repudiandae eos quo cupiditate. Aliquid
        vero debitis recusandae!
      </p>
      <p class="p-2 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        similique mollitia voluptas deserunt autem debitis repudiandae nulla, id
        harum distinctio numquam quod quibusdam. Dolorem ex iste accusantium
        doloribus culpa tempore fugiat commodi expedita, doloremque sed facere
        magni et totam unde ipsa fugit repudiandae eos quo cupiditate. Aliquid
        vero debitis recusandae!
      </p>
    </div>

    <footer
      class="w-full flex items-center justify-center border-t-2 mt-6 dark:border-t-slate-600 border-t-slate-500"
    >
      <p class="text-center p-4 text-lg text-[#912d2d] font-normal">
        Designed By
        <i
          class="text-rose-500 dark:text-emerald-400 font-semibold dark:hover:text-emerald-200 hover:text-slate-600 transition-all duration-300"
        >
          <a href="mailto:younes.a525@hotmail.com">Younes Abdeahad </a></i
        >
      </p>
    </footer>
  </section>
  <!--End Cards-->
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import api from "@/services/api";
import * as moment from "moment";
``;
const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});
const toastShow = computed(() => {
  return store.state.toast.show;
});
const orders = ref([]);
const books = ref([]);
const users = ref([]);
const getOrders = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.get("/api/v1/orders");
    store.commit("setLoading", false, { root: true });
    orders.value = res.data;
  } catch (error) {
    console.log(error);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: error.response.data.message,
      type: "error",
      show: true,
    });
  }
};
const getBooks = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.get("/api/v1/books");
    store.commit("setLoading", false, { root: true });
    books.value = res.data.books;
  } catch (error) {
    console.log(error);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: error.response.data.message,
      type: "error",
      show: true,
    });
  }
};
const getUsers = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.get("/api/v1/accounts");
    store.commit("setLoading", false, { root: true });
    users.value = res.data;
  } catch (error) {
    console.log(error);
    store.commit("setLoading", false, { root: true });
    store.commit("setToast", {
      message: error.response.data.message,
      type: "error",
      show: true,
    });
  }
};
const getTotalRevenue = () => {
  let total = 0;
  orders.value.forEach((order) => {
    total += order.totalAmount;
  });
  return total;
};
onMounted(() => {
  getOrders();
  getBooks();
  getUsers();
});
</script>

<style>
/* No custom styles needed */
</style>
