<template>
  <div class="offCanvas__minicart" :class="{ active: active, '': !active }">
    <div class="minicart__header">
      <div class="minicart__header--top d-flex justify-content-between align-items-center">
        <h3 class="minicart__title">Shopping Cart</h3>
        <button class="minicart__close--btn" @click="closeMinicart" aria-label="minicart close btn" data-offcanvas>
          <svg class="minicart__close--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="32" d="M368 368L144 144M368 144L144 368" />
          </svg>
        </button>
      </div>
      <p class="minicart__header--desc">
        The organic foods products are limited
      </p>
    </div>
    <div class="minicart__product">
      <div v-for="cartItem in cartItems" :key="cartItem.id" class="minicart__product--items d-flex">
        <div class="minicart__thumb">
          <a href="product-details.html"><img src="assets/img/product/product1.png" alt="prduct-img" /></a>
        </div>
        <div class="minicart__text">
          <h4 class="minicart__subtitle">
            <a href="product-details.html">{{ cartItem.name }}</a>
          </h4>
          <span class="color__variant"><b>Color:</b> Beige</span>
          <div class="minicart__price">
            <span class="current__price">${{ Number(cartItem.old_price) * Number(cartItem.quantity) }}</span>
            <span class="old__price">${{ Number(cartItem.price) * Number(cartItem.quantity) }}</span>
          </div>
          <div class="minicart__text--footer d-flex align-items-center">
            <div class="quantity__box minicart__quantity">
              <button type="button" class="quantity__value decrease" aria-label="quantity value" value="Decrease Value"
                :disabled="Number(cartItem.quantity) == 1"
                @click="updateCartItemQty(cartItem, Number(cartItem.quantity) - 1)">
                -
              </button>
              <label>
                <input type="number" min="1" class="quantity__number" :value="cartItem.quantity" data-counter />
              </label>
              <button type="button" class="quantity__value increase" aria-label="quantity value" value="Increase Value"
                @click="updateCartItemQty(cartItem, Number(cartItem.quantity) + 1)">
                +
              </button>
            </div>
            <button class="minicart__product--remove" type="button" @click="removeCartItem(cartItem)">
              Remove
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="minicart__product--items d-flex">
        <div class="minicart__thumb">
          <a href="product-details.html"
            ><img src="assets/img/product/product2.png" alt="prduct-img"
          /></a>
        </div>
        <div class="minicart__text">
          <h4 class="minicart__subtitle">
            <a href="product-details.html">Fresh Tomatoe is organic.</a>
          </h4>
          <span class="color__variant"><b>Color:</b> Green</span>
          <div class="minicart__price">
            <span class="current__price">$115.00</span>
            <span class="old__price">$130.00</span>
          </div>
          <div class="minicart__text--footer d-flex align-items-center">
            <div class="quantity__box minicart__quantity">
              <button
                type="button"
                class="quantity__value decrease"
                aria-label="quantity value"
                value="Decrease Value"
              >
                -
              </button>
              <label>
                <input
                  type="number"
                  class="quantity__number"
                  value="1"
                  data-counter
                />
              </label>
              <button
                type="button"
                class="quantity__value increase"
                aria-label="quantity value"
                value="Increase Value"
              >
                +
              </button>
            </div>
            <button class="minicart__product--remove" type="button">
              Remove
            </button>
          </div>
        </div>
      </div> -->
    </div>
    <div class="minicart__amount">
      <!-- <div class="minicart__amount_list d-flex justify-content-between">
        <span>Sub Total:</span>
        <span><b>$240.00</b></span>
      </div> -->
      <div class="minicart__amount_list d-flex justify-content-between">
        <span>Total:</span>
        <span><b>${{ (cartItems.reduce(function (acc, obj) { return acc + obj.price; }, 0) * cartItems.reduce(function
          (acc, obj) { return acc + obj.quantity; }, 0)).toLocaleString('en-US') }}</b></span>
      </div>
    </div>
    <div class="minicart__conditions text-center">
      <input class="minicart__conditions--input" id="accept" type="checkbox" v-model="toggle" />
      <label class="minicart__conditions--label" for="accept">I agree with the
        <a class="minicart__conditions--link" href="privacy-policy.html">Privacy Policy</a></label>
    </div>
    <div class="minicart__button d-flex justify-content-center">
      <!-- <router-link tag="a" class="btn minicart__button--link" to="/cart"
        >View cart</router-link
      > -->
      <a class="btn minicart__button--link" @click="viewCartFunc">View cart</a>
      <router-link tag="a" class="btn minicart__button--link" to="/checkout">Checkout</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from '../router';

export default {
  name: "MiniCart",
  props: {
    active: Boolean,
    closeMinicart: { type: Function },
  },
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["UPDATE_CART_ITEM_QUANTITY", "REMOVE_FROM_CART",]),
    removeCartItem(product) {
      this.REMOVE_FROM_CART(product);
    },
    updateCartItemQty(product, quantity) {
      this.UPDATE_CART_ITEM_QUANTITY({ cartItem: product, quantity: quantity });
    },
    viewCartFunc() {
      this.closeMinicart();
      router.push('/cart')
    }
  },
  mounted() {
    console.log("active", this.active);
    // Use the parent function directly here
    // this.closeMinicart();
  },
};
</script>