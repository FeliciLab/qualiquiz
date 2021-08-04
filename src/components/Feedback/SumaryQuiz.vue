<template>
  <div class="sumary-quiz mx-13">
    <p>
      <span class="roboto-bold quiz-name"> {{ quizName }} </span> <br>
      <span class="roboto-bold">Tempo de resposta:</span><span> {{ getTimeString }}</span><br>
      <span class="roboto-bold">Taxa de acerto:</span><span> {{ result.acertos }} de  {{ amountQuestions }} questões</span><br>
      <span class="roboto-bold">Nota:</span><span> {{ (result.percentagem / 10).toFixed(1) }}</span>
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
  color: $black64;
}
</style>
