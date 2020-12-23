<template>
  <div
    class='animated fadeIn position-absolute background'
  >
    <b-container>
      <div class='flex-column-items-center mt-50'>
        <Title title='QUESTÕES RESPONDIDAS' />
      </div>
      <div class='flex-column-items-center mt-45'>
        <AmountAnsweredCard />
      </div>
      <p class='mt-50 text-center text-answered'>
        VOCÊ RESPONDEU {{ amountAnswers }} DE {{ amountQuestions }} QUESTÕES
      </p>

      <p class='mx-13 mt-18 text-helper'>
        Você pode revisar as questões ou finalizar o quiz para ver o seu
        resultado. Após enviar suas respostas, não será possível realizar
        novas tentativas.
      </p>

      <p class='mt-18 text-form'>Deseja enviar as respostas agora?</p>

      <slot slot name="actions"></slot>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AmountAnsweredCard from '../../components/Confirmation/AmountAnsweredCard'
import Title from '../../components/Title'

export default {
  name: 'BodyFinish',

  components: {
    AmountAnsweredCard,
    Title
  },

  computed: {
    ...mapGetters('quiz', {
      amountQuestions: 'getNumberOfQuestions',
      amountAnswers: 'getNumberOfAnswers'
    })
  }
}
</script>

<style lang='scss' scoped>
.text-answered {
  color: $orange;
  font-weight: 400;
  font-size: 16px;
}
.text-helper {
  font-size: 14px;
}
.text-form {
  font-size: 16px;
  font-family: 'Roboto-Bold';
  text-align: center;
}
</style>
