<template>
  <div class="sumary-quiz mx-13">
    <p>
      <span class="title-sumary"> {{ quizName }} </span> <br>
      <span>Tempo de resposta: {{ getTimeString }}</span><br>
      <span>Taxa de acerto: {{ result.acertos }} de  {{ amountQuestions }} questões</span><br>
      <span>Nota: {{ (result.percentagem / 10).toFixed(1) }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SumaryQuiz',

  computed: {
    ...mapGetters('quiz', {
      quizName: 'getName',
      amountQuestions: 'getNumberOfQuestions'
    }),
    ...mapGetters('feedback', {
      result: 'getResult',
      getTimeString: 'getTimeString'
    })
  }
}
</script>

<style lang="scss" scoped>
.sumary-quiz {
  font-size: 14px;
}
.title-sumary {
  font-weight: bold
}
</style>
