export default {
  namespaced: true,
  state: {
    one: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      cpf: ''
    },
    answers: []
  },
  mutations: {
    SET_STUDENT: (state, { student }) => {
      state.one = student
    },
    SET_ANSWER: (state, { answer }) => {
      state.answers = state.answers
        .filter(item => item.number !== answer.number)

      state.answers.push(answer)
      state.answers = state.answers.sort((a, b) => a.number - b.number)
    }
  },
  actions: {
    setStudent: ({ commit }, { firstname, lastname, email, phone, cpf }) => {
      commit('SET_STUDENT', { student: { firstname, lastname, email, phone, cpf } })
    },
    setAnswer: ({ commit }, { answer, number }) => {
      commit('SET_ANSWER', { answer: { answer, number } })
    }
  }
}
