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
        <Header
          dark
          title="Bem-vindo(a)"
        />
        <!-- Slider main container -->
        <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div
              v-for="content in contents"
              :key="content.text"
              class="swiper-slide d-flex justify-content-center flex-column"
            >
              <div class="card mx-4">
                <small class="text-center text-uppercase my-2">O que é?</small>
                <h5 class="text-center font-weight-bolder text-uppercase txt-orange">
                  Teste de progresso
                </h5>
                <WelcomeBody>
                  <span v-html="content.bodyText"></span>
                </WelcomeBody>
                <p class="text-center px-5 f-12">
                  {{content.text}}
                </p>
              </div>
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination position-relative"></div>
        </div>
        <Button
          @click="showLoadingPage"
          class="text-center mt-3"
          id="formSubmit"
          color="success"
          label="Iniciar avaliação"
          iconClass="icon-arrow-right"
        />
      </b-container>
    </div>
  </div>

</template>

<script>
import Button from '../components/Button'
import Header from '../components/Header'
import Swiper from 'swiper'
import Loading from '../components/Loading'
import WelcomeBody from '../components/welcome/WelcomeBody'

export default {
  components: {
    Button,
    Header,
    Loading,
    WelcomeBody
  },
  data () {
    return {
      showLoading: false,
      contents: [
        {
          bodyText: `
            <p> Nossas boas vindas ao <strong>QualiQuiz</strong>, o teste de múltipla escolha que vai mensurar seus conhecimentos no campo da Saúde. </p>
            <p> O <strong>QualiQuiz</strong> é uma criação da <strong>Escola de Saúde Pública do Ceará</strong> para promover avaliações por competências dos profissionais de saúde que atuam na rede do SUS. </p>
            <p> Ao responder esse quiz, você nos ajuda a conhecer melhor suas potencialidades e fragilidades, e a qualificar nossa política de educação permanente, com base em um planejamento educacional adequado às necessidades do SUS em nosso estado.</p>
            <p> Para começar seu teste clique no botão abaixo. </p>
          `,
          text: 'É uma ferramenta de avaliação longitudinal, de estudantes e de programas educacionais.',
          img: require('../assets/images/blank.png')
        }
      ]
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
  },
  methods: {
    showLoadingPage () {
      this.showLoading = true
      setTimeout(() => {
        this.$router.push({ name: 'Question' })
      }, 3000)
    }
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
</style>
