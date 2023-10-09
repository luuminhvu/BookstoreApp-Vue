import { createStore } from "vuex";
import authModule from "./modules/auth";
import bookModule from "./modules/book";
export default createStore({
  state: {
    loading: false,
    toast: {
      show: false,
      message: "",
      type: "",
    },
  },
  getters: {},
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setToast(state, payload) {
      state.toast = payload;
      setTimeout(() => {
        state.toast.show = false;
        state.toast.message = "";
        state.toast.type = "";
      }, 3000);
    },
  },
  actions: {},
  modules: {
    auth: authModule,
    book: bookModule,
  },
});
