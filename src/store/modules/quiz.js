export default {
  namespaced: true,
  store: {
    id: 0,
    questions: [],
    name: '',
    timeLimit: '10'
  },
  getters: {
    getId: state => state.id,
    getQuestions: state => state.questions,
    getName: state => state.name,
    getTimeLimit: state => state.timeLimit
  },
  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_QUESTIONS: (state, questions) => {
      state.questions = questions
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TIME_LIMIT: (state, timeLimit) => {
      state.timeLimit = timeLimit
    }
  },
  actions: {
    setId: ({ commit }, id) => {
      commit('SET_ID', id)
    },
    setQuestions: ({ commit }, questions) => {
      commit('SET_QUESTIONS', questions)
    },
    setName: ({ commit }, name) => {
      commit('SET_NAME', name)
    },
    setTimeLimit: ({ commit }, timeLimit) => {
      commit('SET_TIME_LIMIT', timeLimit)
    }
  }
}
