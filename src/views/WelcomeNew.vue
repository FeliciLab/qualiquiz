<template>
  <div>
    <div v-show="showLoading">
      <Loading></Loading>
    </div>
    <div
      class="position-absolute background"
      v-show="!showLoading"
    >
      <b-container>
        <div class="header-logo">
          <img id="logo" src="../assets/images/qualiquiz.svg">
          <img id="logo-description" src="../assets/images/qualiquiz-description.svg">
        </div>

        <p v-html="bodyText"></p>

        <h5 class="text-left font-weight-bolder mx-3 mx-sm-0">
          {{ nameQuiz }}
        </h5>

        <p v-html="quizDescription"></p>

        <div class="py-4">
          <Button
            @click="iniciarQuiz"
            class="text-center"
            id="formSubmit"
            color="success"
            label="INICIAR AVALIAÇÃO"
            iconClass="icon-arrow-right"
          />
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import Swiper from 'swiper'
import Loading from '../components/Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Button,
    Loading
  },
  data () {
    return {
      showLoading: false,
      bodyText: `
        <p> O <strong>QualiQuiz</strong> é uma iniciativa da Escola de Saúde Pública do Ceará para promover avaliar conhecimentos, habilidades e atitudes dos profissionais de saúde. </p>
        <p> Ao responder esse quiz, você nos ajuda a conhecer melhor suas potencialidades e fragilidades, e a qualificar a nossa política de educação permanente, com base em um planejamento educacional adequado às necessidades da força de trabalho do SUS.</p>
      `,
      quizDescription: 'Nesta avaliação, você testará os seus conhecimentos sobre os protocolos de atendimento a pacientes sob suspeita ou acometidos de infecção pelo coronavírus SARS-CoV-2.',
      img: require('../assets/images/blank.png')
    }
  },
  computed: {
    ...mapGetters('quiz', {
      nameQuiz: 'getName',
      timeLimit: 'getTimeLimit',
      currentQuestion: 'getCurrentQuestion'
    })
  },
  methods: {
    ...mapActions('clock', ['initClock']),
    iniciarQuiz () {
      this.showLoading = true
      this.initClock(this.timeLimit)
      setTimeout(() => {
        this.$router.push({ name: 'Question' })
      }, 4000)
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      // If we need pagination
      pagination: {
        clickable: true,
        el: '.swiper-pagination'
      },
      spaceBetween: -35
    })
  }
}
</script>

<style
  lang="scss"
  scoped
>
  small {
    font-family: 'OpenSans-Bold';
  }

  .swiper-container {
    width: 100%;
  }

  .txt-orange {
    color: $burning-orange;
  }

  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-pagination-bullet
  .swiper-pagination-bullet-active {
    margin: 5px
  }

  .swiper-pagination ::v-deep
  .swiper-pagination-bullet-active {
    background-color: $burning-orange !important;
  }

  #logo {
    position: absolute;
    width: 203px;
   height: 40px;
    left: 86px;
    top: 28px;
  }

  #logo-description{
    position: absolute;
    width: 202px;
    height: 10px;
    left: 87px;
    top: 74px;
  }
</style>
