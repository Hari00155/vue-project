import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import StaffFormView from '@/views/StaffFormView.vue'
import StudentFormView from '@/views/StudentFormView.vue'
// route config
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/staff-form', name: 'staff-form', component: StaffFormView },
  { path: '/student-form', name: 'student-form', component: StudentFormView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
