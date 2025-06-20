import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import StaffFormView from '@/views/StaffFormView.vue'
import StudentFormView from '@/views/StudentFormView.vue'
import DepartFormView from '@/views/DepartmentFormView.vue'
import ListView from '@/views/ListView.vue'
import UpdateStudentFormView from '@/views/students/UpdateStudentFormView.vue'
import UpdateStaffFormView from '@/views/staffs/UpdateStaffFormView.vue'
import UpdateDepartmentFormView from '@/views/departments/UpdateDepartmentFormView.vue'

// route config
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/staff-form', name: 'staff-form', component: StaffFormView },
  { path: '/student-form', name: 'student-form', component: StudentFormView },
  { path: '/Department-form', name: 'Department-form', component: DepartFormView },
  { path: '/List-form', name: 'List-form', component: ListView },
  { path: '/students/update', name: 'Update Student Form', component: UpdateStudentFormView },
  { path: '/staffs/update', name: 'Update Staff Form', component: UpdateStaffFormView },
  { path: '/departments/update', name: 'Update Department Form', component: UpdateDepartmentFormView }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
