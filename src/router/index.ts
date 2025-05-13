import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Projects from "../pages/Projects.vue";
import SpaBox from "../pages/SpaBox.vue";
import Work from '../pages/Work.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            meta: { requiresDarkTheme: true }
        },
        {
            path: '/work',
            name: 'Work',
            component: Work,
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