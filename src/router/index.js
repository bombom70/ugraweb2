import {createRouter, createWebHistory} from "vue-router";
import News from "@/pages/News.vue";
import Main from "@/pages/Main.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/news",
        component: News,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;