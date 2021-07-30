<template>
  <div class="question">
    <img class="sucess-image" v-if="isCorrect" src="../../assets/images/correctAnswer.svg" alt="icone_resposta_correta" />
    <img class="sucess-image" v-else src="../../assets/images/incorrectAnswer.svg" alt="icone_resposta_incorreta" />
    <label for="sucess-image" class="question-number">QUESTÃO 0{{questionOrder}}</label>
  </div>
</template>

<script>

export default {
  props: {
    isCorrect: {
      type: Boolean,
      default: false
    },
    questionOrder: {
      type: Number,
      default: 0
    }
  },
  name: 'QuestionNumberIcon',

  components: {

  },

  computed: {

  }
}
</script>
<style lang="scss" scoped>
  .question{
    margin-left: 17.5px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 16px;
  }
  .sucess-image{
    margin-right: 7.5px;
  }
  .question-number{
    font-size: 12px;
    margin: 0px;
  }
</style>
