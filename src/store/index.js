import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import student from './modules/student'
import clock from './modules/clock'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    student,
    clock
  },
  state: {},
  mutations: {},
  actions: {}
})
