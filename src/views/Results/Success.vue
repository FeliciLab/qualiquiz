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
        <FullWidthButton @click="onClick()">
          CONFERIR RESPOSTAS
        </FullWidthButton>
      </div>
    </div>
    <div>
      <FeedbackContent class="full-width-content" />
    </div>
    <div class="fixed-bottom buttonSairWrapper">
      <NakedButton class="buttonSair"
      @click="onClickSair"
      label="SAIR"
      color="#FFFFFF"
      bgColor="#61459B"/>
    </div>
  </div>
</template>

<script>
import CorrectAnsweredCard from '../../components/Sucess/CorrectAnsweredCard.vue'
import FullWidthButton from '../../components/UX/FullWidthButton.vue'
import FeedbackContent from '../../components/Feedback/FeedbackContent.vue'
import NakedButton from '../../components/UX/NakedButton'
import routerNames from '../../router/routerNames'

export default {
  name: 'Success',
  components: {
    CorrectAnsweredCard,
    FullWidthButton,
    FeedbackContent,
    NakedButton
  },
  data () {
    return {
      showFeedback: false
    }
  },
  methods: {
    onClick () {
      this.showFeedback = true
      const scrollToQuestion = document.createElement('a')
      scrollToQuestion.href = '#top-explanation'
      scrollToQuestion.click()
    },
    onClickSair () {
      this.$router.push(routerNames.welcome)
    }
  }
}
</script>

<style lang="scss" scoped>
  .sucess-page {
    padding-bottom: 64px;
    /* min-height: 100vh; */
  }
  .full-width-content {
    margin-top: 80px;
  }
  .bg-green {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
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
  .buttonSair{
    border-radius: 49px;
    Width: 79px;
    Height: 48px;
  }
  .buttonSairWrapper{
    display: flex;
    padding: 16px;
    justify-content: flex-end;
    width: 100%;
  }
</style>
