<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
import auth from '../assets/auth'

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
    this.setAppMocked(false)
    // this.fetchResultMocked()
    this.$router.push(`/dev/isus/login/1/${auth.token}`)
  }
}
</script>
