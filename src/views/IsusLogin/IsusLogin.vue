<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IsusLogin',
  methods: {
    ...mapActions('authentication', ['setToken']),
    ...mapActions('quiz', ['setId', 'cleanQuiz', 'initUserQuizzes']),
    ...mapActions('application', ['setDevelopment', 'setAppMocked'])
  },
  mounted () {
    this.cleanQuiz()

    if (!this.$route.params.codQuiz || !this.$route.params.authToken) {
      this.$router.push('/error')
      return
    }

    this.setToken(this.$route.params.authToken)
    this.setId(this.$route.params.codQuiz)
    this.setDevelopment(this.$route.meta.dev)
    this.setAppMocked(false)
    this.initUserQuizzes({
      devMode: this.$route.meta.dev,
      auth: this.$route.params.authToken
    }).then(() => {
      this.$router.push('/welcome')
    })
    // TODO: vamos usar esse trecho de código em outro lugar
    // this.initQuiz({
    //   codQuiz: this.$route.params.codQuiz,
    //   devMode: this.$route.meta.dev,
    //   auth: this.$route.params.authToken
    // }).then(() => {
    //   this.$router.push('/welcome')
    // })
  }
}
</script>
