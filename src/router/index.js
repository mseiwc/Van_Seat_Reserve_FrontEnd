import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import HomeUserView from '../views/HomeUserView.vue'
import RouteSelectionView from '../views/RouteSelectionView.vue'
import SeatReservationView from '../views/SeatReservationView.vue'
import PaymentView from '../views/PaymentView.vue'
import CheckPaymentView from '../views/CheckPaymentView.vue'

import HomeAdminView from '../views/HomeAdminView.vue'
import AddRouteView from '../views/AddRouteView.vue'

import HomeDriverView from '../views/HomeDriverView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home/admin',
      name: 'home/admin',
      component: HomeAdminView
    },
    {
      path: '/home/user',
      name: 'home/user',
      component: HomeUserView
    },
    {
      path: '/home/driver',
      name: 'home/driver',
      component: HomeDriverView
    },
    {
      path: '/route/selection',
      name: 'route/selection',
      component: RouteSelectionView
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: SeatReservationView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/checkpayment',
      name: 'CheckPayment',
      component: CheckPaymentView
    },
    {
      path: '/addroute',
      name: 'AddRoute',
      component: AddRouteView
    }
  ]
})

export default router
