import axios from 'axios';

const state = {
    products: [],
};

const getters = {
    storeProducts: (state) => state.products,
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios
            .get(`${process.env.BACKEND_URL}}products`)

        var data = response.data['data'];
        commit('setProducts', data);
        return data
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products)
};

export default {
    state,
    getters,
    actions,
    mutations
}