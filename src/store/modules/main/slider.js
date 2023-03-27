import axios from "axios";

export const sliderModule = {
    state: {
        sliders: [],
    },
    mutations: {
        addSliders(state, payload) {
            state.sliders = payload;
        },
    },
    actions: {
        fetchSliders() {
            axios("https://rmc.uwdev.ru/api/main/slider")
                .then(console.log)
                // .then(({data}) => commit("addSliders", data));
        },
    },
    getters: {
        getSliders(state) {
            return state.sliders;
        },
    },
}