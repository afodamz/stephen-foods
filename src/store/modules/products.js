import axios from 'axios';

const state = {
    products: [],
    myCart: [],
    myWishlist: []
};

const getters = {
    storeProducts: (state) => state.products,
    storeWishlst: (state) => state.myWishlist,
    storeCart: (state) => state.myCart,
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios
            .get(`${process.env.BACKEND_URL}products`)

        var data = response.data['data'];
        commit('setProducts', data);
        return data
    },
    async getCategories({ commit }) {
        const response = await axios
            .get(`${process.env.BACKEND_URL}products`)

        var data = response.data['data'];
        commit('setProducts', data);
        return data
    },
    async getMyCart({ commit }) {
        const response = await axios
            .get(`${process.env.BACKEND_URL}cart/myordes`)

        var data = response.data['data'];
        commit('setMyCart', data);
        return data
    },
    async getMyWishlist({ commit }) {
        const response = await axios
            .get(`${process.env.BACKEND_URL}wishlist/`)
        
        var data = response.data['data'];
        commit('setMyWishlist', data);
        return data
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setMyCart: (state, myCart) => (state.myCart = myCart),
    setMyWishlist: (state, myWishlist) => (state.myWishlist = myWishlist),
};

export default {
    state,
    getters,
    actions,
    mutations
}