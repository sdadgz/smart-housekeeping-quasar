import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', redirect: 'home'},
            {path: 'home', component: () => import('pages/Home.vue')},
            {path: 'service', component: () => import('pages/Service.vue')},
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        redirect: '/'
    },
];

export default routes;
