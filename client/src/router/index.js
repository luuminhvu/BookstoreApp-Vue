import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import HomeView from "../views/Explore/HomeView.vue";
import LoginView from "../views/Landing/LoginView.vue";
import RegisterView from "../views/Landing/RegisterView.vue";
import ExploreView from "../layouts/ExploreView.vue";
import LandingView from "../layouts/LandingView.vue";
import IndexView from "../views/Landing/IndexView.vue";
import AccountView from "../views/Explore/AccountView.vue";
import BookDetailView from "../views/Explore/BookDetailView.vue";
import CartView from "../views/Explore/CartView.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingView,
    children: [
      {
        path: "",
        name: "Index",
        component: IndexView,
      },
      {
        path: "/login",
        name: "Login",
        component: LoginView,
      },
      {
        path: "/register",
        name: "register",
        component: RegisterView,
      },
    ],
    beforeEnter: (to, from, next) => {
      // ...
      if (Cookies.get("token")) {
        next("/explore");
      } else {
        next();
      }
    },
  },
  {
    path: "/explore",
    name: "explore",
    component: ExploreView,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "account",
        name: "Account",
        component: AccountView,
      },
      {
        path: "books/:id",
        name: "Book",
        component: BookDetailView,
      },
      {
        path: "cart",
        name: "Cart",
        component: CartView,
      },
    ],
    beforeEnter: (to, from, next) => {
      // ...
      if (Cookies.get("token")) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
