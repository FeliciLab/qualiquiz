<template>
    <div
      class='animated fadeIn'
    >
      <div class='tela-confirmacao'>
        <div>
          <div class='flex-column-items-center mt-45'>
            <AmountAnsweredCard />
          </div>
            <p class='mt-50 text-center text-answered'>
              Você Respondeu {{ amountAnswers }} de {{ amountQuestions }} questões!
            </p>

            <p class='mx-13 mt-18 text-helper text-center'>
              Você pode revisar as questões ou finalizar o quiz para ver o seu
              resultado. Após enviar suas respostas, não será possível realizar
              novas tentativas.
            </p>
          </div>
        <div class="button-row">
          <slot slot name="actions"></slot>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AmountAnsweredCard from '../../components/Confirmation/AmountAnsweredCard'

export default {
  name: 'BodyFinish',

  components: {
    AmountAnsweredCard
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
  color: #000000;
  font-size: 16px;
}
.text-helper {
  font-size: 14px;
  color: $black87;
}
.text-form {
  font-size: 16px;
  font-family: 'Roboto-Bold';
  text-align: center;
}
.tela-confirmacao{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
}
.button-row{
  margin-bottom: 1rem;
}
</style>
