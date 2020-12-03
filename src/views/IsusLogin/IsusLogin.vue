<template>
  <Loading />
</template>

<script>
import Loading from '../../components/Loading.vue'
import { mapActions } from 'vuex'

export default {
  name: 'IsusLogin',
  components: {
    Loading
  },
  methods: {
    ...mapActions('authentication', ['setToken']),
    ...mapActions('quiz', ['setId', 'cleanQuiz', 'initQuiz']),
    ...mapActions('application', ['setDevelopment'])
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
    this.initQuiz({ codQuiz: this.$route.params.codQuiz, devMode: this.$route.meta.dev })
      .then(() => {
        this.$router.push('/welcome')
      })
  }
}
</script>
