import axios from "axios";

export const mediaModule = {
    state: {
        media: []
    },
    mutations: {
        addMedia(state, payload) {
            state.media = payload;
        },
    },
    actions: {
        fetchMedia({ commit }) {
            axios("https://rmc.uwdev.ru/api/main/media")
                .then(({data}) => commit("addMedia", data));
        },
    },
    getters: {
        getMedia(state) {
            return state.media;
        },
    },
}