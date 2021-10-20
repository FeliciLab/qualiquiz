import quizRequest from '../../services/quizRequest'

const timeSpentModel = { start: '', finish: '' }

const answerModel = {
  questionId: -1,
  alternativeId: -1,
  timeSpent: 0,
  startTime: 0,
  finishTime: 0
}

const quizModel = {
  id: 0,
  cod_quiz: '',
  titulo: '',
  data_criacao: '',
  total_questoes: 0,
  respondido: false,
  acertos: -1,
  data_resposta: ''
}

export default {
  namespaced: true,
  state: {
    id: 0,
    questions: [],
    name: '',
    currentQuestion: 0,
    answers: [],
    timeLimit: 0,
    description: '',
    currentQuizId: 0,
    quizzes: [],
    isLoading: false
  },
  getters: {
    getId: state => state.id,
    getQuestions: state => state.questions,
    getName: state => state.name,
    getClock: state => state.clock,
    getQuestion: state =>
      state.questions.length > 0 ? state.questions[state.currentQuestion] : {},
    getNumberOfQuestions: state => state.questions.length,
    getCurrentQuestion: state => state.currentQuestion,
    getAnswers: state => state.answers,
    getIfAnsweredQuestion: state =>
      state.answers.some(
        answer =>
          answer.questionId === state.questions[state.currentQuestion]?.id &&
          answer.alternativeId > 0
      ),
    getNumberOfAnswers: state =>
      state.answers.filter(i => i.alternativeId >= 0).length,
    getAnswerModel: () => answerModel,
    getQuizModel: () => quizModel,
    getTimeSpentModel: () => timeSpentModel,
    getTimeLimit: state => state.timeLimit,
    getDescription: state => state.description,
    getUserQuizzes: state => state.quizzes,
    getUserQuizzesDisponiveis: state =>
      state.quizzes.filter(quiz => !quiz.respondido),
    getUserQuizzesConcluidas: state =>
      state.quizzes.filter(quiz => quiz.respondido),
    getCurrentQuizId: state => state.currentQuizId,
    getCurrentQuiz: state =>
      state.quizzes.find(elem => elem.id === state.currentQuizId),
    getIsLoading: state => state.isLoading
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
        ...state.answers.filter(
          answer => answer.questionId !== alternative.questionId
        ),
        {
          ...(state.answers.find(
            answer => answer.questionId === alternative.questionId
          ) || {}),
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
    SET_DESCRIPTION: (state, payload) => {
      state.description = payload
    },
    SET_USER_QUIZZES: (state, quizzes) => {
      state.quizzes = quizzes
    },
    SET_CURRENT_QUIZ_ID: (state, quizId) => {
      state.currentQuizId = quizId
    },
    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading
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
            answer.timeSpent += finish - answer.startTime
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
    setDescription: ({ commit }, payload) => {
      commit('SET_DESCRIPTION', payload)
    },
    setUserQuizzes: ({ commit }, quizzes) => {
      commit('SET_USER_QUIZZES', quizzes)
    },
    setCurrentQuizId: ({ commit }, quizId) => {
      commit('SET_CURRENT_QUIZ_ID', quizId)
    },
    setIsLoading: ({ commit }, isLoading) => {
      commit('SET_IS_LOADING', isLoading)
    },
    initQuiz: ({ dispatch }, { codQuiz }) => {
      dispatch('setIsLoading', true)
      return quizRequest.getQuiz(codQuiz).then(result => {
        dispatch('setQuizData', result)
        dispatch('setIsLoading', false)
      })
    },
    initUserQuizzes: ({ dispatch }) => {
      dispatch('setIsLoading', true)
      return quizRequest.getUserQuizzes().then(result => {
        dispatch('setUserQuizzes', result)
        dispatch('setIsLoading', false)
      })
    },
    initQuestionsResult: ({ dispatch }, { codQuiz }) => {
      dispatch('setIsLoading', true)
      return quizRequest.getQuiz(codQuiz).then(result => {
        dispatch('setQuizDataResult', result)
        dispatch('setIsLoading', false)
      })
    },
    initVoidAnswers: ({ commit }, questions) => {
      commit(
        'SET_ANSWERS',
        questions.map(question => {
          return {
            ...answerModel,
            questionId: question.id,
            alternativeId: -1
          }
        })
      )
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

      if (Object.prototype.hasOwnProperty.call(result, 'descricao')) {
        dispatch('setDescription', result.descricao)
      }
    },
    setQuizDataResult: ({ dispatch }, result) => {
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

      if (Object.prototype.hasOwnProperty.call(result, 'descricao')) {
        dispatch('setDescription', result.descricao)
      }
    },
    cleanQuiz: ({ commit }) => {
      commit('SET_ID', 0)
      commit('SET_QUESTIONS', [])
      commit('SET_NAME', '')
      commit('SET_ANSWERS', [])
      commit('SET_CURRENT_QUESTION', 0)
      commit('SET_TIME_LIMIT', 0)
      commit('SET_DESCRIPTION', '')
    },
    saveAnswers (context, { timeSpent }) {
      return quizRequest.postAnswers(
        context.state.answers
          .filter(item => item.alternativeId > 0)
          .map(item => {
            return {
              quizId: context.state.id,
              questaoId: item.questionId,
              alternativaId: item.alternativeId,
              tempo: item.timeSpent
            }
          }),
        timeSpent
      )
    },
    addTimeSpentQuestion ({ commit }, { questionId, start, finish }) {
      commit('ADD_TIME_SPENT_QUESTION', { questionId, start, finish })
    }
  }
}
