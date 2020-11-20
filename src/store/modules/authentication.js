export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {
    getToken: state => state.token
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    setToken: ({ commit }, payload) => {
      commit('SET_TOKEN', payload)
    }
  }
}
