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
    answers: [
      {
        number: 1,
        answer: ''
      }
    ]
  },
  mutations: {
    SET_STUDENT: (state, { student }) => {
      state.one = student
    }
  },
  actions: {
    setStudent: ({ commit }, { firstname, lastname, email, phone, cpf }) => {
      commit('SET_STUDENT', { student: { firstname, lastname, email, phone, cpf } })
    }
  }
}
