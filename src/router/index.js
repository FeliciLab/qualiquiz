import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/WelcomeNew.vue'
import Home from '../views/Home.vue'
import QuestionView from '../views/QuestionView.vue'
import Success from '../views/Success.vue'
import Confirmation from '../views/Confirmation.vue'
import Loading from '../components/Loading.vue'
import TimeOut from '../views/TimeOut.vue'
import IsusLogin from '../views/IsusLogin/IsusLogin.vue'
import ErrorView from '../views/ErrorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/question',
    name: 'Question',
    component: QuestionView
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },
  {
    path: '/timeout',
    name: 'Time Out',
    component: TimeOut
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/isus/login/:codQuiz/:authToken',
    name: 'IsusLogin',
    component: IsusLogin,
    meta: {
      dev: false
    }
  },
  {
    path: '/dev/isus/login/:codQuiz/:authToken',
    name: 'IsusLoginDev',
    component: IsusLogin,
    meta: {
      dev: true
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
