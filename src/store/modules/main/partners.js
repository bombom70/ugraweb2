import axios from "axios";

export const partnersModule = {
    state: {
        partners: [],
    },
    mutations: {
        addPartners(state, payload) {
            state.partners = payload;
        },
    },
    actions: {
        fetchPartners({ commit }) {
            axios("https://rmc.uwdev.ru/api/partners/")
                .then(({data}) => commit("addPartners", data));
        },
    },
    getters: {
        getPartners(state) {
            return state.partners;
        },
    },
}