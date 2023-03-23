import axios from "axios";

export const eventsModule = {
    state: {
        events: []
    },
    mutations: {
        addEvents(state, payload) {
            state.events = payload;
        }
    },
    actions: {
        fetchEvents({ commit }) {
            axios("https://rmc.uwdev.ru/api/main/events")
                .then(({data}) => commit("addEvents", data.items));
        }
    },
    getters: {
        getEvents(state) {
            return state.events;
        }
    },
}