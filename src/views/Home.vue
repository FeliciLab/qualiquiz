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
    })
  },
  mounted () {
    this.initTestQuiz(this.$route.params.codQuiz)
    this.$router.push('/welcome')
  }
}
</script>
