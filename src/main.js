import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import '@/components';
import './global-components';
import {CartService} from "@/services/local/cart.service";

import store from './store'

Vue.config.productionTip = false

const cart = CartService.getCart();
store.commit('SET_CART_ITEMS', cart);
const wishlist = CartService.getCart();
store.commit('SET_CART_ITEMS', wishlist);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
