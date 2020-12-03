const uri = {
  // dev: 'http://192.168.15.149:7000',
  dev: 'https://apiisus.dev.org.br',
  prod: 'https://apiisus.inova.esp.br'
}
export default {
  getQuiz: (id, devMode) => {
    const url = devMode ? uri.dev : uri.prod
    return fetch(`${url}/api/qualiquiz/quiz/${id}`)
      .then(result => result.json())
  },
  postAnswers: (data, auth, devMode) => {
    const url = devMode ? uri.dev : uri.prod
    return fetch(`${url}/api/qualiquiz/respostas`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({ respostas: data })
    }).then(result => result.json())
  }
}
