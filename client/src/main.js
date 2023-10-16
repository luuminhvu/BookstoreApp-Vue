import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

createApp(App).use(store).use(Antd).use(router).use(Toast).mount("#app");
