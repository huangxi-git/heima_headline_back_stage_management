import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用
Vue.use(VueRouter)

// 创建
const router = new VueRouter({
    routes: [
        // 登录页
        {
            name: 'login',
            path: '/login',
            component: () => import('../views/login.vue')
        },
        // 首页
        {
            name: 'index',
            path: '/index',
            component: () => import('../views/index.vue')
        },
    ]
})

// 暴露
export default router
