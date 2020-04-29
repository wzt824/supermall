import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("views/home/Home.vue")
  },
  {
    path: "/cart",
    name: "CartHome",
    component: () =>
      import("views/cart/CartHome.vue")
  },
  {
    path: "/category",
    name: "CategoryHome",
    component: () =>
      import("views/category/CategoryHome.vue")
  },
  {
    path: "/profile",
    name: "ProfileHome",
    component: () =>
      import("views/profile/ProfileHome.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;