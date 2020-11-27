export default {
  getQuiz: (id) => {
    return fetch(`http://192.168.15.149:7000/api/qualiquiz/quiz/${id}`)
      .then(result => result.json())
  }
}
