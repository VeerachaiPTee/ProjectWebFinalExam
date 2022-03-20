import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppView from '../views/AppView.vue'

import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/appview',
      component: AppView
    },
    {
      path: '/signup',
      component: SignupView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/adminview',
      component: AdminView
    }
  ]
})

export default router
