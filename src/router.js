import Vue from 'vue';
import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Contact from '@/pages/Contact.vue';
import Details from '@/pages/Details.vue';
import Checkout from '@/pages/Checkout.vue';
import ViewCart from '@/pages/ViewCart.vue';
import PageNotFound from '@/pages/PageNotFound.vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';


Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/cart',
    name: 'cart',
    component: ViewCart
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  // {
  //   path: '*',
  //   name: 'PageNotFound',
  //   component: PageNotFound
  // },
  { path: '*', beforeEnter: (to, from, next) => { next('/404') } },
  {
    path: '/404',
    name: '404',
    component: PageNotFound
    // component: () => import('@/pages/PageNotFound.vue')
  }
  // {
  //   path: '/pets/:species/:id',
  //   name: 'pet',
  //   component: Pet
  // },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// export default router
