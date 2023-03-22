import axios from "axios";
export const mainModule = {
    state: {
        news: [],
        events: []
    },
    mutations: {
        addNews(state, payload) {
            state.news = payload;
            state.news.map(n => n.img !== undefined ? n.img.url = `https://rmc.uwdev.ru/${n?.img.url}` : n);
        },
        addEvents(state, payload) {
            state.events = payload;
        }
    },
    actions: {
        fetchNews({ commit }) {
            axios("https://rmc.uwdev.ru/api/main/news")
                .then(({data}) => commit("addNews", data));
        },
        fetchEvents({ commit }) {
            axios("https://rmc.uwdev.ru/api/main/events")
                .then(({data}) => commit("addEvents", data.items));
        }
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getEvents(state) {
            return state.events;
        }
    },
}