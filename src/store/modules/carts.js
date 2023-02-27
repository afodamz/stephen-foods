import {CartAction, WishlistAction} from "@/store/types.actions";
import {CartService} from "@/services/local/cart.service";
import {WishlistService} from "@/services/local/wishlist.service";

const state = {
    cartItems: [],
    likedItems: []
}

const mutations = {
    'SET_CART_ITEMS'(state, cartItems) {
        state.cartItems = cartItems;
    },
    CLEAR_CART: (state) => {
        state.cartItems = [];
    },
    'SET_WISHLIST_ITEMS'(state, likedItems) {
        state.likedItems = likedItems;
    },
    CLEAR_WISHLIST: (state) => {
        state.likedItems = [];
    }
}

const actions = {
    [CartAction.ADD_PRODUCT_TO_CART]: (context, {product, quantity}) => {
        const cartItems = CartService.addItem(product, quantity);
        context.commit(CartAction.SET_CART_ITEMS, cartItems);
    },
    [CartAction.REMOVE_FROM_CART]: ({commit}, product) => {
        const cartItems = CartService.removeItem(product);
        commit(CartAction.SET_CART_ITEMS, cartItems);
    },

    [CartAction.UPDATE_CART_ITEM_QUANTITY](context, args) {
        context.dispatch(CartAction.ADD_PRODUCT_TO_CART, {product: args.cartItem, quantity: args.quantity})
    },
    'CLEAR_CART'(context) {
        CartService.emptyCart()
        context.commit(CartAction.CLEAR_CART);
    },
    [WishlistAction.ADD_PRODUCT_TO_WISHLIST]: (context, product) => {
        console.log("product", product)
        const cartItems = WishlistService.addItem(product);
        context.commit(WishlistAction.SET_WISHLIST_ITEMS, cartItems);
    },
    [WishlistAction.REMOVE_FROM_WISHLIST]: ({commit}, product) => {
        const cartItems = WishlistService.removeItem(product);
        commit(WishlistAction.SET_WISHLIST_ITEMS, cartItems);
    },
    'CLEAR_WISHLIST'(context) {
        WishlistService.emptyCart()
        context.commit(WishlistAction.CLEAR_WISHLIST);
    }
}

const getters = {
    cartItems: (state) => state.cartItems,
    likedItems: (state) => state.likedItems,
}

export default {
    getters, actions, state, mutations
}