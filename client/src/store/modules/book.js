import api from "@/services/api";

const bookModule = {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {},
  mutations: {
    setBooks(state, payload) {
      state.books = payload;
    },
  },
  actions: {
    async create({ commit }, payload) {
      try {
        commit("setLoading", true, { root: true });
        const response = await api.post("/api/v1/books", payload);
        commit("setLoading", false, { root: true });
        if (response.status === 200) {
          commit(
            "setToast",
            {
              show: true,
              message: "Book created successfully",
              type: "success",
            },
            { root: true }
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
              message: error.response.data.msg,
              type: "error",
            },
            { root: true }
          );
        }
      }
    },
    async getBooks({ commit }, payload) {
      try {
        commit("setLoading", true, { root: true });
        const response = await api.get("/api/v1/books");
        commit("setLoading", false, { root: true });
        if (response.status === 200) {
          commit("setBooks", response.data.books);
        }
      } catch (error) {
        commit("setLoading", false, { root: true });
        console.log(error.response.data);
        if (error.response.status == 400 || error.response.status == 500) {
          commit(
            "setToast",
            {
              show: true,
              message: error.response.data.msg,
              type: "error",
            },
            { root: true }
          );
        }
      }
    },
  },
};
export default bookModule;
