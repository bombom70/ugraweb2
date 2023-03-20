export const newsModule = {
    state: {
        news: [1, 2, 3]
    },
    mutations: {
        addNews(state) {
            state.news.push("Hello");
        }
    },
    actions: {

    },
    getters: {
        getNews(state) {
            return state.news;
        }
    },
}