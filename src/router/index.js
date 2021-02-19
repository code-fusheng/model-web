import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    name: 'layout',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('@/views/index/index')
      },
      {
        path: '/article',
        name: '文章',
        component: () => import('@/views/article/index')
      },
      {
        path: '/articleRead/:id',
        name: '阅读文章',
        component: () => import('@/views/article/article-read')
      },
      {
        path: '/tools',
        name: '工具',
        component: () => import('@/views/tools/index-v2')
      },
      {
        path: '/about',
        name: '关于',
        component: () => import('@/views/about/index')
      },
      {
        path: '/userInfo',
        name: '个人中心',
        component: () => import('@/views/user/userInfo/index')
      },
      {
        path: '/remind',
        name: '提醒',
        component: () => import('@/views/user/remind/index')
      },
      {
        path: '/search/:keyword',
        name: '搜索',
        component: () => import('@/views/search/index')
      },
      {
        path: '/create',
        name: '创作中心',
        component: () => import('@/views/create/index')
      }
    ]
  },
  {
    path: '/exception/403',
    name: '403',
    component: () => import('../views/exception/403')
  },
  {
    path: '/exception/500',
    name: '500',
    component: () => import('../views/exception/500')
  },
  {
    path: '/exception/404',
    name: '404',
    component: () => import('../views/exception/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
