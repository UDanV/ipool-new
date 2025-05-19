import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Projects from "../pages/Projects.vue";
import SpaBox from "../pages/SpaBox.vue";
import Work from '../pages/Work.vue';
import Contacts from '../pages/Contacts.vue';
import Pools from '../pages/Pools.vue'
import notFound from '../pages/404.vue'

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
        },
        {
            path: '/pools',
            name: 'pools',
            component: Pools,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: notFound,
        },
    ]
})