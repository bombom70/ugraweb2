import axios from "axios";

export const newsModule = {
    state: {
        news: [],
        events: []
    },
    mutations: {
        addNews(state, payload) {
            state.news = payload;
        },
    },
    actions: {
        fetchNews({ commit }) {
            axios("https://rmc.uwdev.ru/api/main/news")
                .then(({data}) => commit("addNews", data));
        },
    },
    getters: {
        getNews(state) {
            return state.news;
        },
    },
}