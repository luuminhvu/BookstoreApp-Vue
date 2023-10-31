<template>
  <div class="h-screen grid grid-cols-3">
    <div class="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
      <div
        class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md"
      >
        <div
          class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0"
        >
          <div class="text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 sm:w-5 h-6 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-sm font-medium ml-3">Checkout</div>
        </div>
        <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
          Complete your shipping and payment details below.
        </div>
        <div
          class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
      <div class="rounded-md">
        <form id="payment-form" method="POST" action="">
          <section>
            <h2
              class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2"
            >
              Shipping & Billing Information
            </h2>
            <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">Phone</span>
                <input
                  v-model="newUser.phone"
                  name="phone"
                  type="number"
                  class="focus:outline-none px-3"
                  placeholder="0123456789"
                  required
                />
              </label>
              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">Address</span>
                <input
                  v-model="newUser.city"
                  name="address"
                  class="focus:outline-none px-3"
                  placeholder="10 Street XYZ 654"
                  required
                />
              </label>
            </fieldset>
          </section>
        </form>
      </div>
      <div class="rounded-md">
        <section>
          <h2
            class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2"
          >
            Payment Expression
          </h2>
          <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
              <span class="text-right px-2">Cash on delivery</span>
              <input
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                @change="picked = false"
                v-model="newUser.paymentMethod"
                value="COD"
              />
            </label>
            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
              <span class="text-right px-2">Credit card</span>
              <input
                type="radio"
                name="paymentMethod"
                id="creditCard"
                @change="picked = true"
                v-model="newUser.paymentMethod"
                value="creditCard"
              />
            </label>
          </fieldset>
        </section>
      </div>
      <div class="rounded-md" v-show="picked">
        <div class="form-group">
          <label class="font-bold">Số tiền</label>
          <input
            id="amount"
            name="amount"
            placeholder="Số tiền"
            v-model="total"
            class="form-control p-3 ml-3 border border-gray-300 rounded-md"
            disabled
          />
        </div>
        <div
          class="form-group w-1/2 p-5 border border-gray-300 rounded-md mt-2"
        >
          <label class="font-bold">Chọn Phương thức thanh toán:</label>
          <div class="controls p-3">
            <input
              type="radio"
              name="bankCode"
              id="defaultPaymentMethod"
              value=""
              checked="true"
              @change="optionChoose.bankCode = ''"
            />
            <label class="radio-inline"> Cổng thanh toán VNPAYQR</label>
          </div>
          <div class="controls p-3">
            <input
              type="radio"
              name="bankCode"
              id="vnpayqrPaymentMethod"
              value="VNPAYQR"
              @change="optionChoose.bankCode = 'VNPAYQR'"
            />
            <label class="radio-inline">
              Thanh toán qua ứng dụng hỗ trợ VNPAYQR</label
            >
          </div>
          <div class="controls p-3">
            <input
              type="radio"
              name="bankCode"
              id="vnbankPaymentMethod"
              value="VNBANK"
              @change="optionChoose.bankCode = 'VNBANK'"
            />
            <label class="radio-inline">
              Thanh toán qua ATM-Tài khoản ngân hàng nội địa</label
            >
          </div>
          <div class="controls p-3">
            <input
              type="radio"
              name="bankCode"
              id="intcardPaymentMethod"
              value="INTCARD"
              @change="optionChoose.bankCode = 'INTCARD'"
            />
            <label class="radio-inline"> Thanh toán qua thẻ quốc tế</label>
          </div>
        </div>
        <div
          class="form-group w-1/2 p-5 border border-gray-300 rounded-md mt-2"
        >
          <label class="control-label font-bold">Ngôn ngữ</label>
          <div class="controls p-3">
            <input
              type="radio"
              name="language"
              id="vnLanguage"
              value="vn"
              checked="true"
              @change="optionChoose.language = 'vn'"
            />
            <label class="radio-inline"> Tiếng việt</label>
          </div>
          <div class="controls p-3">
            <input
              type="radio"
              name="language"
              id="enLanguage"
              value="en"
              @change="optionChoose.language = 'en'"
            />
            <label class="radio-inline">Tiếng anh</label>
          </div>
        </div>
        <button
          @click="pay"
          id="btnPopup"
          type="submit"
          class="btn btn-primary bg-cyan-500 p-3 mt-3 border border-gray-300 rounded-md hover:bg-cyan-600 transition-all duration-200"
        >
          Thanh toán
        </button>
      </div>
      <PayButton
        v-show="!picked && validateForm()"
        :cartItems="cartItems"
        class="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
      >
        Pay {{ total }} VNĐ
      </PayButton>
    </div>
    <div class="col-span-1 bg-white lg:block hidden">
      <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
      <ul class="py-6 border-b space-y-6 px-8">
        <li
          v-for="item in cart"
          :key="item._id"
          class="grid grid-cols-6 gap-2 border-b-1"
        >
          <div class="col-span-1 self-center">
            <img
              src="@/assets/phuongphapthugian.png"
              alt="Product"
              class="rounded w-full"
            />
          </div>
          <div class="flex flex-col col-span-3 pt-2">
            <span class="text-gray-600 text-md font-semi-bold">
              {{ item.title }}
            </span>
            <span class="text-gray-400 text-sm inline-block pt-2"
              >{{ item.price }} VNĐ
            </span>
          </div>
          <div class="col-span-2 pt-3">
            <div class="flex items-center space-x-2 text-sm justify-between">
              <span class="text-gray-400">
                {{ item.quantity }} x {{ item.price }}
              </span>
              <span class="text-pink-400 font-semibold inline-block">
                {{ item.price * item.quantity }} VNĐ
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="px-8 border-b">
        <div class="flex justify-between py-4 text-gray-600">
          <span>Subtotal</span>
          <span class="font-semibold text-pink-500"> {{ total }} VNĐ </span>
        </div>
        <div class="flex justify-between py-4 text-gray-600">
          <span>Shipping</span>
          <span class="font-semibold text-pink-500">Free</span>
        </div>
      </div>
      <div
        class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600"
      >
        <span>Total</span>
        <span> {{ total }} VNĐ </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive, ref, watch } from "vue";
import PayButton from "@/components/PayButton.vue";
import api from "@/services/api";
const store = useStore();
const userN = computed(() => store.state.auth.account);
const user = JSON.parse(userN.value);
const cart = computed(() => store.state.cart.cart);
const total = computed(() =>
  store.state.cart.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
);
const loading = computed(() => {
  return store.state.loading;
});
const toast = computed(() => {
  return store.state.toast;
});
const newUser = ref({
  phone: "",
  city: "",
  paymentMethod: "COD",
});
const picked = ref(false);
const optionChoose = reactive({
  bankCode: "",
  language: "vn",
});

watch(
  () => userN.value,
  () => {
    if (userN.value) {
      newUser.value.phone = user.phone;
      newUser.value.city = user.city;
      newUser.value.paymentMethod = "COD";
    }
  }
);
const checkoutCart = () => {
  try {
  } catch (error) {}
};

const validateForm = () => {
  if (validatePhone() && validateCity()) {
    return true;
  }
  return false;
};
const validateCity = () => {
  if (newUser.value.city.length < 9) {
    return false;
  }
  return true;
};
const validatePhone = () => {
  if (newUser.value.phone.length < 9) {
    return false;
  }
  return true;
};

const cartItems = computed(() => ({
  userId: user._id,
  items: cart.value,
  phone: newUser.value.phone,
  city: newUser.value.city,
  total: total.value,
  paymentMethod: newUser.value.paymentMethod,
}));
const pay = async () => {
  try {
    store.commit("setLoading", true, { root: true });
    const res = await api.post("/api/v1/orders/create_payment_url", {
      ...cartItems.value,
      ...optionChoose,
    });
    store.commit("setLoading", false, { root: true });
    window.location.href = res.data.data;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang=""></style>
