import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import Question from '../views/Question.vue'
import Success from '../views/Success.vue'
import Confirmation from '../views/Confirmation.vue'
import Loading from '../components/Loading.vue'
import TimeOut from '../views/TimeOut.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/',
    name: 'WelcomeLogin',
    component: Welcome
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
