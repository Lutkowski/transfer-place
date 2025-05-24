import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AuthPage from "../../pages/AuthPage.vue";
import HomePage from "../../pages/HomePage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthPage,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
