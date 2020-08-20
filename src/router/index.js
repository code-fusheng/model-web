import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/article',
    name: 'layout',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/index')
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/article/index')
      },
      {
        path: '/articleRead/:id',
        name: 'ArticleRead',
        component: () => import('@/views/article/article-read')
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/tools/index')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index')
      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('@/views/user/userInfo/index')
      },
      {
        path: '/search/:keyword',
        name: 'Search',
        component: () => import('@/views/search/index')
      },
      {
        path: '/create',
        name: 'Create',
        component: () => import('@/views/create/index')
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
