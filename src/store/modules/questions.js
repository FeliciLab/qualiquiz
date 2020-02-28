const questions = require('../../assets/questions')
export default {
  namespaced: true,
  state: {
    current: 1,
    all: [],
    one: {
      number: 1,
      question: '',
      answer: '',
      alternativies: []
    }
  },
  getters: {
    currentQuestion: state => state.questions.find(item => item.number === state.current)
  },
  mutations: {
    SET_QUESTIONS: (state, { questions }) => {
      state.all = questions
    },
    SET_CURRENT: (state, payload) => {
      state.current = payload
    }
  },
  actions: {
    setTestQuestions ({ commit, dispatch }) {
      dispatch('setQuestions', questions.questions)
      commit('SET_CURRENT', 1)
    },
    setQuestions ({ commit }, payload) {
      commit('SET_QUESTIONS', { questions: payload })
    }
  }
}
