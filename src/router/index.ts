import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


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
      },
      {
        path: '/sponsor',
        name: 'Sponsor',
        component: () => import((`../views/sponsorVue.vue`)),
      },
      {
        path: '/sponsors',
        name: 'Sponsors',
        component: () => import(('../components/AddSponsor.vue')),
      },
      {
        path: '/student',
        name: 'Student',
        component: () => import((`../views/studentsVue.vue`))
      },
      {
        path: '/addStudent',
        name: 'AddStudent',
        component: () => import((`../components/AddStudent.vue`)),
      },
      {
        path: "/students",
        name: "Students",
        component: () => import((`../components/StudentInfo.vue`)),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import((`../views/loginVue.vue`)),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
