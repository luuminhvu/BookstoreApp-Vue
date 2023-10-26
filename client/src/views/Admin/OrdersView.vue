<template>
  <div class="bg-white p-8 rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">Orders</h2>
        <span class="text-xs">All order</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="bg-gray-50 outline-none ml-1 block"
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
        </div>
        <!-- <div class="lg:ml-40 ml-10 space-x-8">
          <button
            class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
          >
            New Report
          </button>
          <button
            class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
          >
            Create
          </button>
        </div> -->
      </div>
    </div>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Books
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  address
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  totalAmount
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Order Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Shipping Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.order._id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        v-for="book in order.order.books"
                        :key="book.id"
                        class="text-gray-900 whitespace-no-wrap"
                      >
                        {{ book.title }} : QTY {{ book.quantity }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ order.fullname }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ order.order.phone }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ order.order.status }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ order.order.address }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ order.order.totalAmount }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{
                      moment(order.order.dateOrdered).format(
                        "hh:mm:ss a DD/MM/YYYY"
                      )
                    }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{
                      moment(order.order.dateDelivered).format(
                        "hh:mm:ss a DD/MM/YYYY"
                      )
                    }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Delete</span>
                  </span>
                  <span
                    @click="showModal(order.order._id)"
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight mt-2"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Update</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              &nbsp; &nbsp;
              <button
                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <a-modal
      v-model:open="open"
      title="Update Order"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="Status Shipping" name="status">
          <a-select
            v-model:value="formState.status"
            placeholder="Select a option and change input text above"
          >
            <a-select-option value="pending">Pending</a-select-option>
            <a-select-option value="processing">Processing</a-select-option>
            <a-select-option value="shipped">Shipping</a-select-option>
            <a-select-option value="delivered">Delivered</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Shipping Date" required name="orderDelivered">
          <input type="datetime-local" v-model="formState.orderDelivered" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import api from "@/services/api";
import * as moment from "moment";
const orders = ref([]);
const store = useStore();
const open = ref(false);
const confirmLoading = ref(false);
const showModal = (_id) => {
  open.value = true;
  const order = orders.value.find((order) => order.order._id === _id);
  formState._id = order.order._id;
  formState.orderDelivered = moment(order.order.dateDelivered).format(
    "YYYY-MM-DDTHH:mm"
  );
  formState.status = order.order.status;
};
const formState = reactive({
  status: "",
  orderDelivered: "",
});
const handleOk = async () => {
  try {
    confirmLoading.value = true;
    alert(formState.orderDelivered);
    const res = await api.put(`/api/v1/orders/${formState._id}`, {
      status: formState.status,
      dateDelivered: formState.orderDelivered,
    });
    getOrders();
    confirmLoading.value = false;
    open.value = false;
  } catch (error) {
    console.log(error);
    confirmLoading.value = false;
  }
};
const getOrders = async () => {
  try {
    store.commit("setLoading", true, { root: true });
    const res = await api.get("/api/v1/orders");
    orders.value = res.data;
    store.commit("setLoading", false, { root: true });
    console.log(orders.value);
  } catch (error) {
    console.log(error);
    store.commit("setLoading", false, { root: true });
  }
};
onMounted(() => {
  getOrders();
});
</script>
<style scoped></style>
