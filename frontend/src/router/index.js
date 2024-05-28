import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import AppLayoutLanding from '@/layout/AppLayoutLanding.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/home.vue')
                },
                {
                    path: '/howto',
                    name: 'boardHowto',
                    component: () => import('@/views/howto/boardHowto.vue')
                },
                {
                    path: '/howto/:postId',
                    name: 'postHowto',
                    component: () => import('@/views/howto/postHowto.vue')
                },
                {
                    path: '/howto/add',
                    name: 'addHowto',
                    component: () => import('@/views/howto/addHowto.vue')
                },
                {
                    path: '/howto/addLatex',
                    name: 'addLatexHowto',
                    component: () => import('@/views/howto/addLatexHowto.vue')
                },
                {
                    path: '/request',
                    name: 'request',
                    component: () => import('@/views/request/boardRequest.vue')
                },
                {
                    path: '/request/add',
                    name: 'requestAdd',
                    component: () => import('@/views/request/addRequest.vue')
                },
                {
                    path: '/request/:requestId',
                    name: 'requestId',
                    component: () => import('@/views/request/postRequest.vue')
                },
                {
                    path: '/request/:requestId/letmedo',
                    name: 'letMeDo',
                    component: () => import('@/views/request/letmedo.vue')
                },
                {
                    path: '/mypage',
                    name: 'mypage',
                    component: () => import('@/views/user/mypage.vue')
                },
            ]
        },
        {
            path: '/',
            component: AppLayoutLanding,
            children: [
                {
                    path: '/landing',
                    name: 'landing',
                    component: () => import('@/views/user/landing.vue')
                }
            ]
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('@/views/user/signin.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/user/login.vue')
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: () => import('@/views/NotFound.vue')
        }
    ]
});

export default router;
