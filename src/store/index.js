import Vue from 'vue'
import Vuex from 'vuex'
import clock from './modules/clock'
import authentication from './modules/authentication'
import quiz from './modules/quiz'
import application from './modules/application'
import feedback from './modules/feedback'
// import bottomNavigation from './modules/bottomNavigation'

import VuePersist from 'vuex-persist'

Vue.use(Vuex)

const vuePersistStorage = new VuePersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuePersistStorage.plugin],
  modules: {
    clock,
    authentication,
    quiz,
    application,
    feedback
    // bottomNavigation
  },
  state: {},
  mutations: {},
  actions: {}
})
