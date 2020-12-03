export default {
  namespaced: true,
  state: {
    development: false
  },
  getters: {
    getDevelopment: state => state.development
  },
  mutations: {
    SET_DEVELOPMENT: (state, dev) => {
      state.development = dev
    }
  },
  actions: {
    setDevelopment: ({ commit }, mode) => {
      commit('SET_DEVELOPMENT', mode)
    }
  }
}
