<template>
  <div class="animated fadeIn sucess-page">
    <div class="bg-green">
      <div class="circulo">
        <CorrectAnsweredCard />
      </div>
      <div class="texto">
        <p>Parabéns, você concluiu a avaliação Manejo Clínico da Covid-19 2021.1, abaixo estão as respostas que farão parte de seu histórico.</p>
      </div>
      <div>
        <FullWidthButton @click="showFeedback = true">
          CONFERIR RESPOSTAS
        </FullWidthButton>
      </div>
    </div>
    <div v-if="showFeedback">
      <FeedbackContent class="full-width-content" />
    </div>
  </div>
</template>

<script>
import CorrectAnsweredCard from '../../components/Sucess/CorrectAnsweredCard'
import FullWidthButton from '../../components/UX/FullWidthButton'
import FeedbackContent from '../../components/Feedback/FeedbackContent'

export default {
  name: 'Success',

  components: {
    CorrectAnsweredCard,
    FullWidthButton,
    FeedbackContent
  },

  data () {
    return {
      showFeedback: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .sucess-page {
    min-height: 100vh;
  }
  .full-width-content {
    margin-top: 80px;
  }
  .bg-green {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    background-color: $green142;
    padding-top: 56px;
  }
  .circulo{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .texto{
    font-family: Roboto;
    font-size: 16px;
    text-align: center;
    color: white;
    padding-top: 40px;
    padding-left: 25px;
    padding-right: 25px;
  }
</style>
