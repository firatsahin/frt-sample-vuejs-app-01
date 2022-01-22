import { createRouter, createWebHistory } from "vue-router";

const routes = [ // lazy loading the routes
    { path: '/', component: () => import('../views/Home') },
    { path: '/about', component: () => import('../views/About') },
    { path: '/composition-api', component: () => import('../views/CompositionApi') },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;