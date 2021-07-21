<template>
  <CircleAmountAnswered>
    <div class='label'>Você respondeu</div>
    <div class='number'>{{ answered }}</div>
    <div class='label'>questões</div>
  </CircleAmountAnswered>
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
.label {
  font-size: 24px;
}
.number {
  font-family: 'Roboto-Bold';
  font-size: 100px;
}
</style>
