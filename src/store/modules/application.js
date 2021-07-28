export default {
  namespaced: true,
  state: {
    development: false,
    appMocked: false
  },
  getters: {
    getDevelopment: state => state.development,
    getAppMocked: state => state.appMocked
  },
  mutations: {
    SET_DEVELOPMENT: (state, dev) => {
      state.development = dev
    },
    SET_APP_MOCKED: (state, mock) => {
      state.appMocked = mock
    }
  },
  actions: {
    setDevelopment: ({ commit }, mode) => {
      commit('SET_DEVELOPMENT', mode)
    },
    setAppMocked: ({ commit }, mode) => {
      commit('SET_APP_MOCKED', mode)
    }
  }
}
