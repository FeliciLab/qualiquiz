const uri = {
  dev: 'http://192.168.15.149:7000',
  // dev: 'https://apiisus.dev.org.br',
  prod: 'https://apiisus.inova.esp.br'
}

const getUri = (devMode) => {
  return devMode ? uri.dev : uri.prod
}

export default {
  getQuiz: (id, devMode) => {
    return fetch(`${getUri(devMode)}/api/qualiquiz/quiz/${id}`)
      .then(result => result.json())
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
  }
}
