import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import DetailPage from './pages/DetailPage.vue';
import TypePage from './pages/TypePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/project/:slug',
            name: 'list',
            component: DetailPage
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        }  

    ]
});

export { router };