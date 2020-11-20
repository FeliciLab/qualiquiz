<template>
  <Loading />
</template>

<script>
import Loading from '../../components/Loading.vue'
import { mapActions } from 'vuex'
import quizRequest from '../../services/quizRequest'

export default {
  name: 'IsusLogin',
  components: {
    Loading
  },
  mounted () {
    if (!this.$route.params.codQuiz || !this.$route.params.authToken) {
      this.$router.push('/error')
      return
    }

    this.setToken(this.$route.params.authToken)

    quizRequest.getQuiz(this.$route.params.codQuiz)
      .then(result => {
        if (Object.prototype.hasOwnProperty.call(result, 'id')) {
          this.setId(result.id)
        }

        if (Object.prototype.hasOwnProperty.call(result, 'questoes')) {
          this.setQuestions(result.questoes)
        }

        if (Object.prototype.hasOwnProperty.call(result, 'quiz')) {
          this.setName(result.quiz)
        }

        if (Object.prototype.hasOwnProperty.call(result, 'tempo_limite')) {
          this.setTimeLimit(result.tempo_limite)
        }
      })

    this.$router.push('/welcome')
  },
  methods: {
    ...mapActions('authentication', ['setToken']),
    ...mapActions('quiz', ['setId', 'setQuestions', 'setName', 'setTimeLimit'])
  }
}
</script>
