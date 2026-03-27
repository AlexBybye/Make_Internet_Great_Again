//创建路由器并暴露

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'
//create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/news',
            component: News,
            children: [
                {
                    name: "xiang",
                    path: 'detail/:id/:title/:content?',
                    component: Detail,
                    props: true
                }
            ]
        },
        {
            path: '/about',
            component: About,
        },
    ]
})
//export router
export default router
