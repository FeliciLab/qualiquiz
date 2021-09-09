<template>
  <div>
    <h1>{{ getCurrentQuizId }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InitQuiz',
  computed: {
    ...mapGetters('quiz', ['getCurrentQuizId'])
  }
}
</script>

<style lang="scss" scoped></style>
