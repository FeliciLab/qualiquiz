<template>
  <CircleAmountAnswered :answered="answered" />
</template>

<script>
import { mapGetters } from 'vuex'
import CircleAmountAnswered from './CircleAmountAnswered'

export default {
  name: 'AmountAnsweredCard',
  components: {
    CircleAmountAnswered
  },
  computed: {
    ...mapGetters('quiz', {
      answered: 'getNumberOfAnswers'
    })
  }
}
</script>

<style scoped>
div {
  color: white;
  line-height: initial;
}
</style>
