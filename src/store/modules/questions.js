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
    currentQuestion: state => state.all.find(item => item.number === state.current),
    amountQuestions: state => state.all.length
  },
  mutations: {
    SET_QUESTIONS: (state, { questions }) => {
      state.all = questions
    },
    SET_QUESTION: (state, { question }) => {
      state.one = Object.assign(question)
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
    },
    setCurrentQuestion ({ commit }, number) {
      commit('SET_CURRENT', number)
    }
  }
}
