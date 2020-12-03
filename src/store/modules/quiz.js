import moment from 'moment'
import quizRequest from '../../services/quizRequest'
const quizTest = require('../../assets/questions')

export default {
  namespaced: true,
  state: {
    id: 0,
    questions: [],
    name: '',
    currentQuestion: 0,
    answer: {
      questionId: 0,
      alternativeId: 0
    },
    answers: []
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
    getNumberOfAnswers: state => state.answers.length,
    getAnswerModel: state => state.answer
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
      state.answers = answers
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
    initTestQuiz: ({ dispatch }) => {
      dispatch('setQuizData', quizTest)
    },
    initQuiz: ({ dispatch }, { codQuiz, devMode }) => {
      return quizRequest.getQuiz(codQuiz, devMode)
        .then(result => {
          dispatch('setQuizData', result)
        })
    },
    setQuizData: ({ dispatch }, result) => {
      dispatch('cleanQuiz')
      if (Object.prototype.hasOwnProperty.call(result, 'id')) {
        dispatch('setId', result.id)
      }

      if (Object.prototype.hasOwnProperty.call(result, 'questoes')) {
        dispatch('setQuestions', result.questoes)
      }

      if (Object.prototype.hasOwnProperty.call(result, 'quiz')) {
        dispatch('setName', result.quiz)
      }

      if (Object.prototype.hasOwnProperty.call(result, 'tempo_limite')) {
        dispatch('clock/setFinishTime', moment().add(result.tempo_limite, 'm'), { root: true })
        dispatch('clock/setMinuteLimit', result.tempo_limite, { root: true })
        dispatch('clock/setTimeLeft', result.tempo_limite, { root: true })
      }
    },
    cleanQuiz: ({ commit }) => {
      commit('SET_ID', 0)
      commit('SET_QUESTIONS', [])
      commit('SET_NAME', '')
      commit('SET_ANSWERS', [])
      commit('SET_CURRENT_QUESTION', 0)
    },
    saveAnswers (context, { token, devMode }) {
      quizRequest.postAnswers(
        context.state.answers.map(item => {
          return {
            quizId: context.state.id,
            questaoId: item.questionId,
            alternativaId: item.alternativeId
          }
        }),
        token,
        devMode
      )
    }
  }
}
