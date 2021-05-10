import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ 'views/home/Home.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ 'views/cart/Cart.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ 'views/category/Category.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ 'views/profile/Profile.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ 'views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router

