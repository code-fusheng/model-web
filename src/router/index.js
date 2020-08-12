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
        path: '/articleEdit/:id',
        name: 'ArticleEdit',
        component: () => import('@/views/article/article-edit')
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
