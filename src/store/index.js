import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import student from './modules/student'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    student
  },
  state: {},
  mutations: {},
  actions: {}
})
