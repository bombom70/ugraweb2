import axios from "axios";

export const newsPageModule = {
    state: {
        data: [],
    },
    mutations: {
        addData(state, payload) {
            state.data = payload;
        }

    },
    actions: {
        fetchAllNews({ commit }) {
            axios("https://rmc.uwdev.ru/api/news")
                .then(({data}) => commit("addData", data));
        },
        fetchNewsToTag({ commit }, tag) {
            axios(`https://rmc.uwdev.ru/api/news?tag=${tag}`)
                .then(({data}) => commit("addData", data));
        },
    },
    getters: {
        getAllNews(state) {
            return state.data.content;
        },
        getCategory(state) {
            return state.data.category;
        },
        getMeta(state) {
            return state.data.meta;
        },
        getPageNavigation(state) {
            return state.data.pageNav;
        },
    },
}