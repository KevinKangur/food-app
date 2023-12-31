import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food2',
    name: 'food2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Food2View.vue')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/FoodView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
