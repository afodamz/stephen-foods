import axios from 'axios';

const state = {
    modal: false,
};

const getters = {
    systemModal: (state) => state.modal,
};

const actions = {
    async showOrHiddenModal({ commit }) {
        commit('SHOW_MODAL');
    },
};

const mutations = {
    SHOW_MODAL: (state) => (state.modal = !state.modal),
};

export default {
    state,
    getters,
    actions,
    mutations
}