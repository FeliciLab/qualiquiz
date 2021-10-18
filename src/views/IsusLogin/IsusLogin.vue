<template>
  <div></div>
</template>

<script>
import api from '../../api'
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

    Promise.all([
      this.setToken(this.$route.params.authToken),
      this.setId(this.$route.params.codQuiz),
      this.setDevelopment(this.$route.meta.dev),
      this.setAppMocked(false)
    ]).then(() => {
      console.log(this.$route.params.authToken)
      if (this.$route.params.authToken) {
        api.defaults.headers.authorization = `Bearer ${this.$route.params.authToken}`
      }
      this.initUserQuizzes({
        devMode: this.$route.meta.dev,
        auth: this.$route.params.authToken
      }).then(() => {
        this.$router.push('/welcome')
      })
    })
  }
}
</script>
