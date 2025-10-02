import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DashboardVue from '../views/dashboardVue.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    redirect: '/dashboard',
    component: () => import('../views/Layouts.vue'),
    meta: {requiresAuth: true},
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardVue,
      },
      {
        path: '/sponsor',
        name: 'Sponsor',
        component: () => import('../views/sponsorVue.vue'),
      },
      {
        path: '/student',
        name: 'Student',
        component: () => import('../views/studentsVue.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/loginVue.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
