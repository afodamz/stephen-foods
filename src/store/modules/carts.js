import { CartAction, WishlistAction, OrderAction } from "@/store/types.actions";
import { CartService } from "@/services/local/cart.service";
import { WishlistService } from "@/services/local/wishlist.service";
import axios from 'axios';

const state = {
    cartItems: [],
    wishlistItems: [],
    orderList: [],
}

// const wishlistService = new WishlistService();

const mutations = {
    'SET_CART_ITEMS'(state, cartItems) {
        state.cartItems = cartItems;
    },
    'SET_ORDERS'(state, cartItems) {
        state.cartItems = cartItems;
    },
    CLEAR_CART: (state) => {
        state.cartItems = [];
    },
    'SET_WISHLIST_ITEMS'(state, wishlistItems) {
        state.wishlistItems = wishlistItems;
    },
    'SET_ORDER_ITEMS'(state, orderList) {
        state.orderList = orderList;
    },
    CLEAR_WISHLIST: (state) => {
        state.wishlistItems = [];
    }
}

const actions = {
    [CartAction.ADD_PRODUCT_TO_CART]: (context, product) => {
        console.log('product in store', product);
        (async () => {
            const cartItems = await CartService.addItem(product);
            context.commit(CartAction.SET_CART_ITEMS, cartItems);
        })();
    },
    [CartAction.REMOVE_FROM_CART]: ({ commit }, product) => {
        (async () => {
            const cartItems = await CartService.removeItem(product);
            commit(CartAction.SET_CART_ITEMS, cartItems);
        })();

    },
    [CartAction.UPDATE_CART_ITEM_QUANTITY](context, args) {
        context.dispatch(CartAction.ADD_PRODUCT_TO_CART, { product: args.cartItem, quantity: args.quantity })
    },
    'CLEAR_CART'(context) {
        CartService.emptyCart()
        context.commit(CartAction.CLEAR_CART);
    },
    [WishlistAction.ADD_PRODUCT_TO_WISHLIST]: (context, product) => {
        // check if loggedin
        (async () => {
            const id = product.id
            const cartItems = await WishlistService.addItem(id);
            console.log('cartItms', cartItems)
            context.commit(WishlistAction.SET_WISHLIST_ITEMS, cartItems);
        })();
    },
    [WishlistAction.REMOVE_FROM_WISHLIST]: ({ commit }, product) => {
        (async () => {
            const id = product.id
            const cartItems = await WishlistService.removeItem(id);
            commit(WishlistAction.SET_WISHLIST_ITEMS, cartItems);
        })();

    },
    'CLEAR_WISHLIST'(context) {
        WishlistService.emptyCart()
        context.commit(WishlistAction.CLEAR_WISHLIST);
    },
    async getOrders({ commit }) {
        console.log('getting orders');
        (async () => {
            const data = await CartService.getOrders();
            commit('SET_ORDER_ITEMS', data);
        })();
    },
    // [OrderAction.GET_ORDERS]: async ({ commit }) => {
    //     console.log('getting orders');
    //     (async () => {
    //         const data = await CartService.getOrders();
    //         commit('SET_ORDER_ITEMS', data);
    //     })();
    // },
}

const getters = {
    cartItems: (state) => state.cartItems,
    wishlistItems: (state) => state.wishlistItems,
    orderItems: (state) => state.orderList,
}

export default {
    getters, actions, state, mutations
}