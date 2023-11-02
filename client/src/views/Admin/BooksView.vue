<template lang="">
  <div class="bg-white p-8 rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">Books List</h2>
        <span class="text-xs">All products item</span>
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
            @input="search"
            class="bg-gray-50 outline-none ml-1 block"
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
        </div>
        <div class="lg:ml-40 ml-10 space-x-8">
          <button
            class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
          >
            New Report
          </button>
          <button
            @click="showModal1"
            class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
          >
            Create
          </button>
        </div>
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
                  Name
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Publisher
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Created at
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  price
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in books" :key="book._id">
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
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ book.title }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ book.category }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ moment(book.createdAt).format("DD/MM/YYYY") }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ book.price }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    @click="showModal(book._id)"
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Edit</span>
                  </button>
                  <button
                    @click="showModal2(book._id)"
                    class="relative inline-block px-3 py-1 ml-2 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 opacity-50 rounded-full bg-red-600"
                    ></span>
                    <span class="relative">Delete</span>
                  </button>
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
      title="Edit Book"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item
          :name="['book', 'title']"
          label="Title"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.book.title" />
        </a-form-item>
        <a-form-item
          :name="['book', 'category']"
          label="Category"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.book.category" />
        </a-form-item>
        <a-form-item
          :name="['book', 'price']"
          label="Price"
          :rules="[{ type: 'number', min: 0 }]"
        >
          <a-input-number v-model:value="formState.book.price" />
        </a-form-item>
        <a-form-item :name="['book', 'images']" label="Images">
          <a-input
            type="file"
            v-model="formState.book.image"
            name="image"
            @change="onFileChange"
          />
        </a-form-item>
        <a-form-item :name="['book', 'description']" label="Description">
          <a-textarea v-model:value="formState.book.desc" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <div>
    <a-modal
      v-model:open="create"
      title="Create Book"
      :confirm-loading="confirmLoading"
      @ok="handleOk1"
    >
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item
          :name="['book', 'title']"
          label="Title"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.book.title" />
        </a-form-item>
        <a-form-item
          :name="['book', 'category']"
          label="Category"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.book.category" />
        </a-form-item>
        <a-form-item
          :name="['book', 'price']"
          label="Price"
          :rules="[{ type: 'number', min: 0 }]"
        >
          <a-input-number v-model:value="formState.book.price" />
        </a-form-item>
        <a-form-item :name="['book', 'images']" label="Images">
          <a-input
            type="file"
            v-model="formState.book.image"
            name="image"
            @change="
              onFileChange;
              previewFiles($event);
            "
          />
        </a-form-item>
        <a-form-item label="Image Choose">
          <a-image
            :width="200"
            :height="200"
            :src="newImage"
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
          />
        </a-form-item>

        <a-form-item :name="['book', 'description']" label="Description">
          <a-textarea v-model:value="formState.book.desc" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <div>
    <a-modal
      v-model:open="isDelete"
      title="Do you want to delete this book?"
      :confirm-loading="confirmLoading"
      @ok="handleDelete"
    >
    </a-modal>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, ref, reactive } from "vue";
import * as moment from "moment";
import api from "@/services/api";
import { setHeaders } from "@/services/isAdmin";
const store = useStore();
const open = ref(false);
const create = ref(false);
const isDelete = ref(false);
const confirmLoading = ref(false);
const showModal = (_id) => {
  open.value = true;
  const book = books.value.find((book) => book._id === _id);
  formState.book = book;
  console.log(book);
};
const showModal1 = () => {
  create.value = true;
  //xoa du lieu cu
  formState.book = {
    title: "",
    category: "",
    price: "",
    image: "",
    desc: "",
  };
};
const showModal2 = (_id) => {
  isDelete.value = true;
  const book = books.value.find((book) => book._id === _id);
  formState.book = book;
};
const formState = reactive({
  book: {
    title: "",
    category: "",
    price: "",
    image: "",
    desc: "",
  },
});
const onFileChange = (e) => {
  const file = e.target.files[0];
  // Lấy tên tệp (tên ảnh) từ tệp đã chọn
  const fileName = file.name;
  formState.book.image = fileName;
};

const handleOk = async () => {
  try {
    confirmLoading.value = true;
    const res = await api.put(
      `/api/v1/books/${formState.book._id}`,
      {
        book: formState.book,
      },
      setHeaders()
    );
    confirmLoading.value = false;
    open.value = false;
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
    books.values = res.data.newBook;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
    confirmLoading.value = false;
    store.commit("setToast", {
      show: true,
      message: error.response.data.msg,
      type: "error",
    });
  }
};
const handleOk1 = async () => {
  try {
    confirmLoading.value = true;
    const res = await api.post(
      `/api/v1/books/add`,
      {
        book: formState.book,
      },

      setHeaders()
    );
    confirmLoading.value = false;
    create.value = false;
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
    books.values = res.data.newBook;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
    confirmLoading.value = false;
    store.commit("setToast", {
      show: true,
      message: error.response.data.msg,
      type: "error",
    });
  }
};
const handleDelete = async () => {
  try {
    confirmLoading.value = true;
    const res = await api.delete(
      `/api/v1/books/${formState.book._id}`,
      setHeaders()
    );
    confirmLoading.value = false;
    isDelete.value = false;
    store.commit("setToast", {
      show: true,
      message: res.data.msg,
      type: "success",
    });
    books.values = res.data.newBook;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
    confirmLoading.value = false;
    store.commit("setToast", {
      show: true,
      message: error.response.data.msg,
      type: "error",
    });
  }
};
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const newImage = ref("");
const previewFiles = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    newImage.value = reader.result;
  };
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
const search = async (e) => {
  const value = e.target.value;
  if (value) {
    const res = await api.get(`/api/v1/books/search/${value}`);
    books.value = res.data.books;
  } else {
    getBooks();
  }
};

const onFinish = (values) => {
  console.log("Success:", values);
};
const books = ref([]);
const getBooks = async () => {
  await store.dispatch("book/getBooks");
  books.value = store.state.book.books;
};
onMounted(() => {
  getBooks();
});
</script>
<style scoped></style>
