import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import { isAdmin } from "@/services/isAdmin";
import HomeView from "../views/Explore/HomeView.vue";
import LoginView from "../views/Landing/LoginView.vue";
import RegisterView from "../views/Landing/RegisterView.vue";
import ExploreView from "../layouts/ExploreView.vue";
import LandingView from "../layouts/LandingView.vue";
import IndexView from "../views/Landing/IndexView.vue";
import AccountView from "../views/Explore/AccountView.vue";
import BookDetailView from "../views/Explore/BookDetailView.vue";
import CartView from "../views/Explore/CartView.vue";
import CheckoutView from "../views/Explore/CheckoutView.vue";
import OrderView from "../views/Explore/OrderView.vue";
import ChangePasswordView from "../views/Explore/ChangePasswordView.vue";
import CheckoutSuccessView from "../views/Explore/CheckoutSuccessView.vue";
import AdminView from "../layouts/AdminView.vue";
import DashboardView from "../views/Admin/DashboardView.vue";
import BooksView from "../views/Admin/BooksView.vue";
import UsersView from "../views/Admin/UsersView.vue";
import OrdersView from "../views/Admin/OrdersView.vue";

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
      {
        path: "checkout",
        name: "Checkout",
        component: CheckoutView,
      },
      {
        path: "order/:id",
        name: "Order",
        component: OrderView,
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: ChangePasswordView,
      },
      {
        path: "checkout-success",
        name: "CheckoutSuccess",
        component: CheckoutSuccessView,
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
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: DashboardView,
      },
      {
        path: "books",
        name: "Books",
        component: BooksView,
      },
      {
        path: "users",
        name: "Users",
        component: UsersView,
      },
      {
        path: "orders",
        name: "Orders",
        component: OrdersView,
      },
    ],
    beforeEnter: (to, from, next) => {
      // ...
      if (Cookies.get("token") && isAdmin()) {
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
  linkExactActiveClass: "active",
});

export default router;
