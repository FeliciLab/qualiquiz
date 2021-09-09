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
import routerNames from './routerNames'

Vue.use(VueRouter)

const routes = [
  {
    path: routerNames.home,
    name: 'Home',
    component: Home
  },
  {
    path: routerNames.welcome,
    name: 'Welcome',
    component: Welcome
  },
  {
    path: routerNames.quiz,
    name: 'InitQuiz',
    component: InitQuiz
  },
  {
    path: routerNames.quizzes,
    name: 'Quizzes',
    component: AllQuizzes
  },
  {
    path: routerNames.question,
    name: 'Question',
    component: QuestionView
  },
  {
    path: routerNames.loading,
    name: 'Loading',
    component: Loading
  },
  {
    path: routerNames.confirmation,
    name: 'Confirmation',
    component: FinishQuiz,
    meta: {
      component: Confirmation
    }
  },
  {
    path: routerNames.timeout,
    name: 'Time Out',
    component: TimeOut
  },
  {
    path: routerNames.success,
    name: 'Success',
    component: Success
  },
  {
    path: routerNames.isusLogin,
    name: 'IsusLogin',
    component: IsusLogin,
    meta: {
      dev: false
    }
  },
  {
    path: routerNames.isusLoginDev,
    name: 'IsusLoginDev',
    component: IsusLogin,
    meta: {
      dev: true
    }
  },
  {
    path: routerNames.error,
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
