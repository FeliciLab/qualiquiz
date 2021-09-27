import quizRequest from '../../services/quizRequest'

// const resultado = require('@/assets/resultado.json')

const resultModel = {
  acertos: 0,
  erros: 0,
  tempo: 0,
  num_questoes: 0,
  percentagem: 0
}

const answersModel = {
  cod_quiz: 0,
  cod_questao: 0,
  ordem_questao: 0,
  cod_alternativa_marcada: 0,
  ordem_alternativa_marcada: 0,
  cod_alternativa_correta: 0,
  ordem_alternativa: 0,
  data_resposta: 0,
  acerto: false
}

const explanationModel = {
  descricao: '',
  questao: ''
}

export default {
  namespaced: true,
  state: {
    result: { ...resultModel },
    answers: { ...answersModel },
    explanations: []
  },
  getters: {
    getResult: state => state.result,
    getExplanations: state => state.explanations,
    getTimeString: state =>
      new Date(state.result.tempo * 1000).toISOString().substr(11, 8),
    getAnswers: state => state.answers,
    getAnswersAlternative: state => {
      return state.answers.reduce((acc, curr) => {
        acc[curr.ordem_questao] = curr.ordem_alternativa_marcada
        return acc
      }, {})
    }
  },
  mutations: {
    SET_RESULT: (state, result) => {
      state.result = { ...resultModel, ...result }
    },
    SET_EXPLANATIONS: (state, explanations) => {
      state.explanations = [
        ...explanations.map(item => ({ ...explanationModel, ...item }))
      ]
    },
    SET_ANSWERS: (state, answers) => {
      state.answers = answers.map(a => ({ ...answersModel, ...a }))
    }
  },
  actions: {
    setResult ({ commit }, result) {
      commit('SET_RESULT', result)
    },
    setExplanations ({ commit }, explanations) {
      commit('SET_EXPLANATIONS', explanations)
    },
    setAnswers ({ commit }, answers) {
      commit('SET_ANSWERS', answers)
    },
    // TODO: não usar isso
    // fetchResultMocked ({ dispatch }) {
    //   dispatch('setResult', resultado.resultado)
    //   dispatch('setExplanations', resultado.comentarioQuestoes)
    //   dispatch('setAnswers', resultado.respostas)
    // },
    fetchResult ({ dispatch }, { id, auth, devMode }) {
      return quizRequest.fetchResult(id, auth, devMode).then(result => {
        console.log(result)
        dispatch('setResult', result.resultado)
        dispatch('setExplanations', result.comentarioQuestoes)
        dispatch('setAnswers', result.respostas)
      })
    }
  }
}
