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
    ...mapActions('quiz', ['setId', 'cleanQuiz', 'initQuiz'])
  },
  mounted () {
    this.cleanQuiz()

    if (!this.$route.params.codQuiz || !this.$route.params.authToken) {
      this.$router.push('/error')
      return
    }

    this.setToken(this.$route.params.authToken)
    this.setId(this.$route.params.codQuiz)
    this.initQuiz(this.$route.params.codQuiz)

    this.$router.push('/welcome')
  }
}
</script>
