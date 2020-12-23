<template>
  <CircleSucessResult>
    <div class='label'>Você acertou</div>
    <div class='number'>{{ result.acertos }}</div>
    <div class='label'>questões</div>
  </CircleSucessResult>
</template>

<script>
import { mapGetters } from 'vuex'
import CircleSucessResult from './CircleSucessResult'

export default {
  name: 'CorrectAnsweredCard',
  components: {
    CircleSucessResult
  },
  computed: {
    ...mapGetters('feedback', {
      result: 'getResult'
    })
  }
}
</script>

<style scoped>
div {
  font-family: Roboto-Bold;
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
