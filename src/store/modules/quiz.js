import quizRequest from '../../services/quizRequest'
const quizTest = require('../../assets/questions')

const timeSpentModel = { start: '', finish: '' }
const answerModel = {
  questionId: -1,
  alternativeId: -1,
  timeSpent: 0,
  startTime: 0,
  finishTime: 0
}

export default {
  namespaced: true,
  state: {
    id: 0,
    questions: [],
    name: '',
    currentQuestion: 0,
    answers: [],
    timeLimit: 0
  },
  getters: {
    getId: state => state.id,
    getQuestions: state => state.questions,
    getName: state => state.name,
    getClock: state => state.clock,
    getQuestion: state => state.questions.length > 0
      ? state.questions[state.currentQuestion]
      : {},
    getNumberOfQuestions: state => state.questions.length,
    getCurrentQuestion: state => state.currentQuestion,
    getAnswers: state => state.answers,
    getNumberOfAnswers: state => state.answers.filter(i => i.alternativeId >= 0).length,
    getAnswerModel: () => answerModel,
    getTimeSpentModel: () => timeSpentModel,
    getTimeLimit: state => state.timeLimit
  },
  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_QUESTIONS: (state, questions) => {
      state.questions = questions.sort((a, b) => a.ordem - b.ordem)
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TIME_MINUTE_LIMIT: (state, timeLimit) => {
      state.clock.timeMinuteLimit = timeLimit
    },
    SET_ANSWERS: (state, answers) => {
      state.answers = [...answers]
    },
    SET_ANSWER: (state, alternative) => {
      if (state.answers.length === 0) {
        state.answers = [alternative]
        return
      }

      state.answers = [
        ...state.answers.filter(answer => answer.questionId !== alternative.questionId),
        {
          ...state.answers.find(answer => answer.questionId !== alternative.questionId) || {},
          ...alternative
        }
      ]
    },
    SET_CURRENT_QUESTION: (state, current) => {
      state.currentQuestion = current
    },
    SET_TIME_LIMIT: (state, payload) => {
      state.timeLimit = payload
    },
    ADD_TIME_SPENT_QUESTION: (state, { questionId, start, finish }) => {
      state.answers = [
        ...state.answers.map(answer => {
          if (answer.questionId !== questionId) {
            return answer
          }

          if (start !== undefined && start >= 0) {
            answer.startTime = start
            return answer
          }

          if (finish !== undefined && finish >= 0) {
            answer.finishTime = finish
            answer.timeSpent += (finish - answer.startTime)
            return answer
          }
        })
      ]
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
    setAnswer: ({ commit }, alternative) => {
      commit('SET_ANSWER', alternative)
    },
    setCurrentQuestion: ({ commit }, current) => {
      commit('SET_CURRENT_QUESTION', current)
    },
    setTimeLimit: ({ commit }, payload) => {
      commit('SET_TIME_LIMIT', payload)
    },
    initTestQuiz: ({ dispatch }) => {
      dispatch('setQuizData', quizTest)
    },
    initQuiz: ({ dispatch }, { codQuiz, devMode }) => {
      return quizRequest.getQuiz(codQuiz, devMode)
        .then(result => {
          dispatch('setQuizData', result)
        })
    },
    initVoidAnswers: ({ commit }, questions) => {
      commit('SET_ANSWERS', questions.map(question => {
        return {
          ...answerModel,
          questionId: question.id,
          alternativeId: -1
        }
      }))
    },
    setQuizData: ({ dispatch }, result) => {
      dispatch('cleanQuiz')
      if (Object.prototype.hasOwnProperty.call(result, 'id')) {
        dispatch('setId', result.id)
      }

      if (Object.prototype.hasOwnProperty.call(result, 'questoes')) {
        dispatch('setQuestions', result.questoes)
        dispatch('initVoidAnswers', result.questoes)
      }

      if (Object.prototype.hasOwnProperty.call(result, 'quiz')) {
        dispatch('setName', result.quiz)
      }

      if (Object.prototype.hasOwnProperty.call(result, 'tempo_limite')) {
        dispatch('setTimeLimit', result.tempo_limite)
      }
    },
    cleanQuiz: ({ commit }) => {
      commit('SET_ID', 0)
      commit('SET_QUESTIONS', [])
      commit('SET_NAME', '')
      commit('SET_ANSWERS', [])
      commit('SET_CURRENT_QUESTION', 0)
      commit('SET_TIME_LIMIT', 0)
    },
    saveAnswers (context, { token, devMode, timeSpent }) {
      quizRequest.postAnswers(
        context.state.answers.map(item => {
          return {
            quizId: context.state.id,
            questaoId: item.questionId,
            alternativaId: item.alternativeId,
            tempo: item.timesPent
          }
        }),
        token,
        devMode,
        timeSpent
      )
    },
    addTimeSpentQuestion ({ commit }, { questionId, start, finish }) {
      commit('ADD_TIME_SPENT_QUESTION', { questionId, start, finish })
    }
  }
}
