import api from '../api'

export default {
  getQuiz: async id => {
    const { data } = await api.get(`/api/qualiquiz/quiz/${id}`)
    return data
  },
  getUserQuizzes: async () => {
    const { data } = await api.get('/api/qualiquiz/home')
    return data
  },
  fetchResult: async id => {
    const { data } = await api.get(`/api/qualiquiz/resultado/${id}`)
    return data
  },
  postAnswers: async (respostas, tempoTotal) => {
    const { data } = await api.post('/api/qualiquiz/respostas', {
      respostas,
      tempoTotal
    })
    return data
  }
}
