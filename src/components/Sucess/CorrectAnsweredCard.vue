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

<style lang="scss" scoped>
div {
  font-family: Roboto-Bold;
  line-height: initial;
}
.label {
  color: $green04;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
}
.number {
  font-family: Roboto;
  font-size: 60px;
  color: $green04;
}
</style>
