import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import HomeUserView from '../views/HomeUserView.vue'
import ConfirmReserveView from '../views/ConfirmReserveView.vue'
import PaymentView from '../views/PaymentView.vue'
import CheckPaymentUserView from '../views/CheckPaymentUserView.vue'


import HomeAdminView from '../views/HomeAdminView.vue'
import AddRouteView from '../views/AddRouteView.vue'
import CheckPaymentAdminView from '../views/CheckPaymentAdminView.vue'
import SeatSelectionView from '../views/SeatSelectionView.vue'
import SeatReservationView from '../views/SeatReservationView.vue'

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
      path: '/selection/seat',
      name: 'selection/seat',
      component: SeatSelectionView
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: SeatReservationView
    },
    {
      path: '/confirmreserve',
      name: 'confirmreserve',
      component: ConfirmReserveView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/paymentlist',
      name: 'paymentlist',
      component: () => import('../views/PaymentListView.vue')
    },
    {
      path: '/checkpaymentuser',
      name: 'checkPaymentuser',
      component: CheckPaymentUserView
    },
    {
      path: '/checkpaymentadmin',
      name: 'checkPaymentadmin',
      component: CheckPaymentAdminView
    },
    {
      path: '/addroute',
      name: 'addRoute',
      component: AddRouteView
    },
    {
      path: '/route',
      name: 'route',
      component: () => import('../views/RouteView.vue')
    },
    {
      path: '/addcar',
      name: 'addcar',
      component: () => import('../views/AddCarView.vue')
    }
  ]
})

export default router
