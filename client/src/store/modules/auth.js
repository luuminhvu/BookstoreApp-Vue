import api from "@/services/api";
import Cookies from "js-cookie";

const authModule = {
  namespaced: true,
  state: {
    account: Cookies.get("account") ? Cookies.get("account") : {},
    token: Cookies.get("token") ? Cookies.get("token") : "",
  },
  getters: {},
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await api.post("/login", payload);
        const { user, token } = response.data;
        commit("setAccount", user);
        commit("setToken", token);
        Cookies.set("token", token);
        Cookies.set("account", JSON.stringify(user));
        console.log(response.data);
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
      }
    },
    async logout({ commit }) {
      commit("setAccount", {});
      commit("setToken", "");
      Cookies.remove("token");
      Cookies.remove("account");
    },
    async register({ commit }, payload) {
      try {
        const response = await api.post("/register", payload);
        const { user, token } = response.data;
        commit("setAccount", user);
        commit("setToken", token);
        Cookies.set("token", token);
        Cookies.set("account", JSON.stringify(user));
        console.log(response.data);
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
      }
    },
  },
  modules: {},
};

export default authModule;
