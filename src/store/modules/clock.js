import moment from 'moment'

export default {
  namespaced: true,
  state: {
    startTime: moment(),
    secondLimit: 0,
    timeLeft: 0,
    finishTime: false,
    percent: ''
  },
  getters: {
    finishTime: state => state.finishTime,
    secondLimit: state => state.secondLimit,
    timeLeft: state => state.timeLeft,
    minuteLeft: state => Math.floor(state.timeLeft / 60),
    timeSpent: state => state.secondLimit - state.timeLeft,
    percent: state => {
      if (state.timeLeft === 0) {
        return 100
      }

      return Math.floor((state.timeLeft / state.secondLimit) * 100)
    }
  },
  mutations: {
    SET_SECOND_LIMIT: (state, limit) => {
      state.secondLimit = limit
    },
    SET_TIME_LEFT: (state, timeLeft) => {
      state.timeLeft = timeLeft
    },
    SET_FINISH_TIME: (state, finishTime) => {
      state.finishTime = finishTime
    },
    SET_START_TIME: (state, time) => {
      state.startTime = time
    }
  },
  actions: {
    setTimeLeft: ({ commit }, timeLeft) => {
      commit('SET_TIME_LEFT', timeLeft)
    },
    setFinishTime: ({ commit }, finishTime) => {
      commit('SET_FINISH_TIME', finishTime)
    },
    setSecondLimit: ({ commit }, limit) => {
      commit('SET_SECOND_LIMIT', limit)
    },
    setStartTime: ({ commit }) => {
      commit('SET_START_TIME', moment())
    },
    initClock: ({ dispatch }, time) => {
      dispatch('setStartTime')
      dispatch('setFinishTime', moment().add(time, 'm'))
      dispatch('setSecondLimit', time * 60)
      dispatch('setTimeLeft', time * 60)
    }
  }
}
