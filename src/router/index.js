import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/start',
    name: '시작',
    component : () => import('../views/start.vue')
  },
  {
    path: '/start_easy',
    name: '시작_easy',
    component : () => import('../views/start_easy.vue')
  },
  {
    path: '/start_hard',
    name: '시작_hard',
    component : () => import('../views/start_hard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
