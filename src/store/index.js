import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import student from './modules/student'
import clock from './modules/clock'
import authentication from './modules/authentication'
import quiz from './modules/quiz'
import VuePersist from 'vuex-persist'

Vue.use(Vuex)

const vuePersistStorage = new VuePersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuePersistStorage.plugin],
  modules: {
    questions,
    student,
    clock,
    authentication,
    quiz
  },
  state: {},
  mutations: {},
  actions: {}
})
