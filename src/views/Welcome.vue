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
              <img src="../assets/images/logo-qualiquiz-white.svg">
          </div>
          <div v-for="content in contents"
              :key="content.text">
          <span v-html="content.bodyText"></span>
              <h5 class="text-center font-weight-bolder text-uppercase txt-orange mx-3 mx-sm-0">
                  {{ nameQuiz }}
              </h5>
        </div>
        <div class="py-4">
          <Button
            @click="showLoadingPage"
            class="text-center"
            id="formSubmit"
            color="success"
            label="Iniciar avaliação"
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
import { mapGetters } from 'vuex'

export default {
  components: {
    Button,
    Loading
  },
  data () {
    return {
      showLoading: false,
      contents: [
        {
          bodyText: `
            <p> Nossas boas-vindas ao <strong>QualiQuiz</strong>, o teste de múltipla escolha que vai mensurar seus conhecimentos no campo da Saúde. </p>
            <p> O <strong>QualiQuiz</strong> é uma criação da <strong>Escola de Saúde Pública do Ceará</strong> para promover avaliações por competências dos profissionais de saúde. </p>
            <p> Ao responder esse quiz, você nos ajuda a conhecer melhor suas potencialidades e fragilidades, e a qualificar nossa política de educação permanente, com base em um planejamento educacional adequado às necessidades do SUS em nosso estado.</p>
            <p> Para começar seu teste, clique no botão abaixo. </p>
          `,
          text: 'É uma ferramsenta de avaliação longitudinal, de estudantes e de programas educacionais.',
          img: require('../assets/images/blank.png')
        }
      ]
    }
  },
  computed: {
    ...mapGetters('quiz', {
      nameQuiz: 'getName'
    })
  },
  methods: {
    showLoadingPage () {
      this.showLoading = true
      setTimeout(() => {
        this.$router.push({ name: 'Question' })
      }, 3000)
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
</style>
