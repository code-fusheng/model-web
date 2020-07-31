import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'layout',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index')
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/article/index')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
