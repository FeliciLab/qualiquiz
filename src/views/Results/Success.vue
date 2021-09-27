<template>
  <div class="animated fadeIn sucess-page">
    <div class="bg-green">
      <div class="circulo">
        <CorrectAnsweredCard />
      </div>
      {{ token }}
      {{ quiz }}
      {{ result }}
      {{ $route.params.idQuiz }}
      <div class="texto">
        <p>
          Parabéns, você concluiu a avaliação {{ quiz.titulo }}, abaixo estão as
          respostas que farão parte de seu histórico.
        </p>
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
      <NakedButton
        class="buttonSair"
        @click="onClickSair"
        label="SAIR"
        color="#FFFFFF"
        bgColor="#61459B"
      />
    </div>
  </div>
</template>

<script>
import CorrectAnsweredCard from '../../components/Sucess/CorrectAnsweredCard.vue'
import FullWidthButton from '../../components/UX/FullWidthButton.vue'
import FeedbackContent from '../../components/Feedback/FeedbackContent.vue'
import NakedButton from '../../components/UX/NakedButton'
import routerNames from '../../router/routerNames'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Success',
  components: {
    CorrectAnsweredCard,
    FullWidthButton,
    FeedbackContent,
    NakedButton
  },
  computed: {
    ...mapGetters('quiz', {
      quiz: 'getCurrentQuiz'
    }),
    ...mapGetters('feedback', {
      result: 'getResult'
    }),
    ...mapGetters('authentication', {
      token: 'getToken'
    }),
    ...mapGetters('application', {
      development: 'getDevelopment'
    })
  },
  methods: {
    ...mapActions('feedback', ['fetchResult']),
    onClick () {
      const scrollToQuestion = document.createElement('a')
      scrollToQuestion.href = '#top-explanation'
      scrollToQuestion.click()
    },
    onClickSair () {
      this.$router.push(routerNames.welcome)
    }
  },
  mounted () {
    if (this.quiz.id) {
      console.log('mounted')
      // this.fetchResult(this.$route.params.idQuiz, this.token, this.development)
      this.fetchResult({
        id: this.quiz.id,
        auth: this.token,
        devMode: this.development
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sucess-page {
  padding-bottom: 64px;
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
.circulo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.texto {
  font-family: Roboto;
  font-size: 16px;
  text-align: center;
  color: white;
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
}
.buttonSair {
  border-radius: 49px;
  width: 79px;
  height: 48px;
}
.buttonSairWrapper {
  display: flex;
  padding: 16px;
  justify-content: flex-end;
  width: 100%;
}
</style>
