const cartModule = {
  namespaced: true,
  state: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  getters: {
    cart: (state) => state.cart,
    cartTotalQuantity: (state) => state.cartTotalQuantity,
    cartTotalAmount: (state) => state.cartTotalAmount,
  },
  mutations: {
    setCart(state, payload) {
      state.cart = payload;
    },
    setCartTotalQuantity(state, payload) {
      state.cartTotalQuantity = payload;
    },
    setCartTotalAmount(state, payload) {
      state.cartTotalAmount = payload;
    },
  },

  actions: {
    addToCart({ commit }, payload) {
      try {
        commit("setLoading", true, { root: true });
        const cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        const foundIndex = cart.findIndex((el) => el.id === payload.id);

        if (foundIndex === -1) {
          cart.push(payload);
        } else {
          cart[foundIndex].quantity += payload.quantity;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        commit("setCart", cart);
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          {
            show: true,
            message: "Added to cart",
            type: "success",
          },
          { root: true }
        );
      } catch (error) {
        // Handle any errors, e.g., localStorage quota exceeded
        console.error("Error adding to cart:", error);
      }
    },
    deleteCart({ commit }, payload) {
      try {
        commit("setLoading", true, { root: true });
        const cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        const foundIndex = cart.findIndex((el) => el.id === payload.id);

        if (foundIndex !== -1) {
          cart.splice(foundIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        commit("setCart", cart);
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          {
            show: true,
            message: "Removed from cart",
            type: "success",
          },
          { root: true }
        );
      } catch (error) {
        // Handle any errors, e.g., localStorage quota exceeded
        console.error("Error deleting from cart:", error);
      }
    },
    clearCart({ commit }) {
      try {
        commit("setLoading", true, { root: true });
        localStorage.removeItem("cart");
        commit("setCart", []);
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          {
            show: true,
            message: "Cart cleared",
            type: "success",
          },
          { root: true }
        );
      } catch (error) {
        // Handle any errors, e.g., localStorage quota exceeded
        console.error("Error clearing cart:", error);
      }
    },
    decreaseCart({ commit }, payload) {
      try {
        commit("setLoading", true, { root: true });
        const cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        const foundIndex = cart.findIndex((el) => el.id === payload.id);

        if (foundIndex !== -1) {
          cart[foundIndex].quantity -= 1;
          if (cart[foundIndex].quantity <= 0) {
            cart.splice(foundIndex, 1);
          }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        commit("setCart", cart);
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          {
            show: true,
            message: "Decreased quantity",
            type: "success",
          },
          { root: true }
        );
      } catch (error) {
        // Handle any errors, e.g., localStorage quota exceeded
        console.error("Error decreasing cart:", error);
      }
    },
    increaseCart({ commit }, payload) {
      try {
        commit("setLoading", true, { root: true });
        const cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        const foundIndex = cart.findIndex((el) => el.id === payload.id);

        if (foundIndex !== -1) {
          cart[foundIndex].quantity += 1;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        commit("setCart", cart);
        commit("setLoading", false, { root: true });
        commit(
          "setToast",
          {
            show: true,
            message: "Increased quantity",
            type: "success",
          },
          { root: true }
        );
      } catch (error) {
        // Handle any errors, e.g., localStorage quota exceeded
        console.error("Error increasing cart:", error);
      }
    },
    getTotals({ commit }) {
      try {
        const cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        let totalQuantity = 0;
        let totalAmount = 0;
        cart.forEach((el) => {
          totalQuantity += el.quantity;
          totalAmount += el.quantity * el.price;
        });
        commit("setCartTotalQuantity", totalQuantity);
        commit("setCartTotalAmount", totalAmount);
      } catch (error) {
        // Handle any errors, e.g., localStorage quota exceeded
        console.error("Error getting totals:", error);
      }
    },
  },
};

export default cartModule;
