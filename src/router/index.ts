import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/store.ts'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    redirect: '/dashboard',
    component: () => import((`../views/Layouts.vue`)),
    meta: {requiresAuth: true},
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import((`../views/DashboardVue.vue`)),
        meta: {requiresAuth: true},
      },
      {
        path: '/sponsors',
        name: 'Sponsors',
        component: () => import((`../views/sponsorsVue.vue`)),
        meta: {requiresAuth: true},
      },
      {
        path: '/sponsor',
        name: 'Sponsor',
        component: () => import(('../components/Sponsor.vue')),
        meta: {requiresAuth: true},
      },
      {
        path: '/students',
        name: 'Students',
        component: () => import((`../views/studentsVue.vue`)),
        meta: {requiresAuth: true},
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import((`../views/loginVue.vue`)),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  authStore.loadFromStorage()

  if(to.meta?.requiresAuth && !authStore.isAuthenticated) {
    next("/login")
  } else if(to.path === '/login' && authStore.isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
