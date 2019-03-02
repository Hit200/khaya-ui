import Vue from "vue";
import Router from "vue-router";
import PropertiesListing from "@/pages/PropertiesListing";
import Index from "@/pages/Index";
import CreateNewHouse from "@/pages/CreateNewHouse";
import Login from "@/pages/Login";
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

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
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
      beforeEnter: useAuth
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
