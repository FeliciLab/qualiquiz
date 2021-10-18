import api from '../api'

const uri = {
  // dev: 'http://192.168.15.149:7000',
  dev: 'https://apiisus.dev.org.br',
  prod: 'https://apiisus.inova.esp.br'
}

const getUri = devMode => {
  return devMode ? uri.dev : uri.prod
}

export default {
  getQuiz: (id, devMode, auth) => {
    return fetch(`${getUri(devMode)}/api/qualiquiz/quiz/${id}`, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    }).then(result => result.json())
  },
  // getUserQuizzes: (devMode, auth) => {
  //   return fetch(`${getUri(devMode)}/api/qualiquiz/home/`, {
  //     headers: {
  //       Authorization: `Bearer ${auth}`
  //     }
  //   }).then(result => result.json())
  // },
  getUserQuizzes: async () => {
    const { data } = await api.get('/api/qualiquiz/home/')
    return data
  },
  getUserQuizzesTest: async () => {
    const { data } = await api.get('/api/qualiquiz/home/')
    return data
  },
  postAnswers: (data, auth, devMode, timeSpent) => {
    return fetch(`${getUri(devMode)}/api/qualiquiz/respostas`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({ respostas: data, tempoTotal: timeSpent })
    }).then(result => result.json())
  },
  fetchResult: (id, auth, devMode) => {
    return fetch(`${getUri(devMode)}/api/qualiquiz/resultado/${id}`, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    }).then(response => {
      const responseJson = response.json()
      return responseJson
    })
  }
}
