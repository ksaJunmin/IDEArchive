import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('@/views/Home.vue')
                },
                {
                    path: '/board/mypage',
                    name: 'mypage',
                    component: () => import('@/views/board/mypage.vue')
                },
                {
                    path: '/board/1',
                    name: 'board1',
                    component: () => import('@/views/board/1.vue')
                },
                {
                    path: '/board/2',
                    name: 'board2',
                    component: () => import('@/views/board/2.vue')
                },
                {
                    path: '/board/3',
                    name: 'request',
                    component: () => import('@/views/board/3.vue')
                },
                {
                    path: '/requestForm',
                    name: 'requestForm',
                    component: () => import('@/views/board/requestForm.vue')
                },
                {
                    path: '/board/mypage',
                    name: 'mypage',
                    component: () => import('@/views/board/mypage.vue')
                },
                {
                    path: '/addpost',
                    name: 'addpost',
                    component: () => import('@/views/post/addpost.vue')
                },
                {
                    path: '/latexpost',
                    name: 'latexpost',
                    component: () => import('@/views/post/latexPost.vue')
                },
                {
                    path: '/post/:postId',
                    name: 'post',
                    component: () => import('@/views/post/post.vue')
                },
                {
                    path: '/request/:requestId',
                    name: 'requestId',
                    component: () => import('@/views/request/request.vue')
                },
            ]
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('@/views/board/signin.vue')
        },
        {
            path: '/board/prepage',
            name: 'prepage',
            component: () => import('@/views/board/prepage.vue')
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/loginpage',
            name: 'loginpage',
            component: () => import('@/views/board/loginpage.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
