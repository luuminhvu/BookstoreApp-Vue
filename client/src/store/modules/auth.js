import api from "@/services/api";
import Cookies from "js-cookie";
import { root } from "postcss";

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
      commit("setLoading", true, { root: true });
      try {
        const response = await api.post("/login", payload);
        commit("setLoading", false, { root: true });
        const { user, token } = response.data;
        if (response.status === 200) {
          commit("setAccount", user);
          commit("setToken", token);
          Cookies.set("token", token);
          Cookies.set("account", JSON.stringify(user));
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            {
              show: true,
              message: "Login successful",
              type: "success",
            },
            {
              root: true,
            }
          );
          setTimeout(() => {
            window.location.href = "/explore";
          }, 2000);
        }
      } catch (error) {
        commit("setLoading", false, { root: true });
        console.log(error.response.data);
        if (error.response.status == 400 || error.response.status == 500) {
          commit(
            "setToast",
            {
              show: true,
              message: "Login failed",
              type: "error",
            },
            { root: true }
          );
        }
      }
    },
    async logout({ commit }) {
      commit("setAccount", {});
      commit("setToken", "");
      Cookies.remove("token");
      Cookies.remove("account");
    },
    async register({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const response = await api.post("/register", payload);
        const { user, token } = response.data;
        if (response.status === 200) {
          commit("setAccount", user);
          commit("setToken", token);
          Cookies.set("token", token);
          Cookies.set("account", JSON.stringify(user));
          console.log(response.data);
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            {
              show: true,
              message: "Register successful",
              type: "success",
            },
            {
              root: true,
            }
          );
          setTimeout(() => {
            window.location.href = "/explore";
          }, 2000);
        }
      } catch (error) {
        commit("setLoading", false, { root: true });
        if (error.response.status == 400 || error.response.status == 500) {
          commit(
            "setToast",
            {
              show: true,
              message: "Register failed",
              type: "error",
            },
            { root: true }
          );
        }
      }
    },
  },
  modules: {},
};

export default authModule;
