import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import QuestionView from '../views/QuestionView.vue'
import FinishQuiz from '../views/EndingQuiz/FinishQuiz.vue'
import Confirmation from '../views/EndingQuiz/Confirmation.vue'
import TimeOut from '../views/EndingQuiz/TimeOut.vue'
import Success from '../views/Results/Success.vue'
import Loading from '../components/Loading.vue'
import IsusLogin from '../views/IsusLogin/IsusLogin.vue'
import ErrorView from '../views/ErrorView.vue'
import InitQuiz from '../views/InitQuiz'
import AllQuizzes from '../views/AllQuizzes'

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
    path: '/quiz',
    name: 'InitQuiz',
    component: InitQuiz
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    component: AllQuizzes
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
    component: FinishQuiz,
    meta: {
      component: Confirmation
    }
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
