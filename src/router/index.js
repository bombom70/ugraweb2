import {createRouter, createWebHistory} from "vue-router";
import News from "@/pages/News.vue";
import Main from "@/pages/Main.vue";
import NewsItem from "@/pages/NewsItem.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/news/:id",
        component: NewsItem,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;