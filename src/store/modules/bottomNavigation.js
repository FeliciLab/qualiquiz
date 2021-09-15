export default {
  namespaced: true,
  state: {
    actionSelected: ''
  },
  getters: {
    getActionSelected: state => state.actionSelected
  },
  mutations: {
    SET_ACTION_SELECTED: (state, action) => {
      state.actionSelected = action
    }
  },
  actions: {
    setActionSelected: ({ commit }, action) => {
      commit('SET_ACTION_SELECTED', action)
    }
  }
}
