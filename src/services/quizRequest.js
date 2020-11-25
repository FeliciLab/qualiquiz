export default {
  getQuiz: (id) => {
    return fetch(`http://192.168.15.149:7000/api/qualiquiz/quiz/${id}`)
      .then(result => result.json())
  },
  postAnswers: (data, auth) => {
    return fetch('http://192.168.15.149:7000/api/qualiquiz/respostas', {
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
