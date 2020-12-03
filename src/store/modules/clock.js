export default {
  namespaced: true,
  state: {
    minuteLimit: 0,
    timeLeft: 0,
    finishTime: false,
    percent: ''
  },
  getters: {
    // O parametro é a state
    finishTime: state => state.finishTime,
    minuteLimit: state => state.minuteLimit,
    timeLeft: state => state.timeLeft,
    percent: state => {
      if (state.timeLeft === 0) {
        return 100
      }
      return Math.floor((state.timeLeft / state.minuteLimit) * 100)
    }
  },
  mutations: {
    SET_MINUTE_LIMIT: (state, limit) => {
      state.minuteLimit = limit
    },
    SET_TIME_LEFT: (state, timeLeft) => {
      state.timeLeft = timeLeft
    },
    SET_FINISH_TIME: (state, finishTime) => {
      state.finishTime = finishTime
    }
  },
  actions: {
    setTimeLeft: ({ commit }, timeLeft) => {
      commit('SET_TIME_LEFT', timeLeft)
    },
    setFinishTime: ({ commit }, finishTime) => {
      commit('SET_FINISH_TIME', finishTime)
    },
    setMinuteLimit: ({ commit }, limit) => {
      commit('SET_MINUTE_LIMIT', limit)
    }
  }
}
