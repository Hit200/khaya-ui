import Vue from "vue";
import Router from "vue-router";
import PropertiesListing from "@/pages/PropertiesListing";
import Index from "@/pages/Index";
import CreateNewHouse from "@/pages/CreateNewHouse";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import SingleProperty from "@/pages/SingleProperty";
import Checkout from "@/pages/Checkout";
import store from "../store";

Vue.use(Router);

function useAuth(from, to, next) {
  if (store.state.currentUser) {
    next();
  } else {
    next({ path: "/login", query: { return_to: from.fullPath } });
  }
}

function useHomeOwnerAuth(from, to, next) {
  if (store.state.currentUser && store.state.currentUser.role == "host") {
    next();
  } else {
    next({
      path: "/login",
      query: { return_to: from.fullPath, host_account_required: 1 }
    });
  }
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/homes",
      name: "PropertiesListing",
      component: PropertiesListing,
      beforeEnter: useAuth
    },
    {
      path: "/new",
      name: "CreateNewHouse",
      component: CreateNewHouse,
      beforeEnter: useHomeOwnerAuth
    },
    {
      path: "/:id",
      name: "SingleProperty",
      component: SingleProperty,
      beforeEnter: useAuth
    },
    {
      path: "/:id/checkout",
      name: "Checkout",
      component: Checkout,
      beforeEnter: useAuth
    }
  ]
});
