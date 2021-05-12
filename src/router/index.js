import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};


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
    meta:{
      isLogin:true
    },
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
    meta:{
      isLogin:true
    },
    component: () => import(/* webpackChunkName: "about" */ 'views/profile/Profile.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ 'views/detail/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      showNav: true
    },
    component: () => import(/* webpackChunkName: "about" */ 'views/login/Login.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})


router.beforeEach((to,from,next)=>{
  if (to.matched.some(item => item.meta.isLogin)) {
    if (!sessionStorage.getItem('token')) {
      var vm = new Vue();
      vm.$toast.show('亲，需要登录哟~',1000);
      setTimeout(()=>{
        next({path:'/login'})
      },1000)
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router

