import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import '@/components';
import './global-components';
import { CartService } from "@/services/local/cart.service";
import { WishlistService } from "@/services/local/wishlist.service";
import { JwtService } from "@/services/local/jwt.service";
import Toasted from 'vue-toasted';
import VueCarousel from 'vue-carousel';
// import VueToast from 'vue-toast-notification';
import VueToast from 'vue-toast-notification';
// import VueCookies from 'vue-cookies'

import store from './store'

Vue.use(VueCarousel);
Vue.use(Toasted);
Vue.use(VueToast);
// Vue.use(VueCookies);

Vue.config.productionTip = false;

(async () => {
  const wishlist = await WishlistService.getWishlist();
  store.commit('SET_WISHLIST_ITEMS', wishlist);

  const cart = await CartService.getCart();
  store.commit('SET_CART_ITEMS', cart);

})();


const user = JwtService.getLocalStorage('user');
const refreshToken = JwtService.getCacheValue('refreshToken');
if (user && refreshToken) store.commit('SET_USER', user);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
