<template>
  <div>
    <div>
      <img id="isCorrect" v-if="isCorrect" src="../../assets/images/correctAnswer.svg" alt="icone_resposta_correta" />
      <img id="isCorrect" v-else src="../../assets/images/incorrectAnswer.svg" alt="icone_resposta_incorreta" />
    </div>
    <div>
      <label for="isCorrect">QUESTÃO 0{{questionOrder}}</label>
    </div>
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
</style>
