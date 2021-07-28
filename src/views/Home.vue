<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions('quiz', {
      initTestQuiz: 'initTestQuiz'
    }),
    ...mapActions('application', ['setAppMocked']),
    ...mapActions('feedback', ['fetchResultMocked'])
  },
  mounted () {
    this.setAppMocked(true)
    this.fetchResultMocked()
    this.initTestQuiz(this.$route.params.codQuiz)
    this.$router.push('/welcome')
  }
}
</script>
