import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Projects from "../pages/Projects.vue";
import SpaBox from "../pages/SpaBox.vue";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'Main',
        component: Main
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/spa-box',
            name: 'spa-box',
            component: SpaBox,
        }
    ]
})