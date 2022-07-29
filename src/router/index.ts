import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/Index.vue'
import CareersPage from '@/pages/careers/Index.vue'
import AboutPage from '@/pages/about/Index.vue'
import BlogPage from '@/pages/blog/Index.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/careers',
        name: 'CareersPage',
        component: CareersPage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/blog',
        name: 'BlogPage',
        component: BlogPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router