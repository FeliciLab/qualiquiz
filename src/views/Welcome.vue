<template>
  <div>
    <div v-show="showLoading">
      <Loading></Loading>
    </div>
    <div
      class="position-absolute background"
      v-show="!showLoading"
    >
      <div class="header-logo" >
        <div>
        </div>
        <div id="div-sobre">
          <button id="buttonSobre" @click="openModal">
            <img id="logoSobre" src="@/assets/icons/sobre.svg">
          </button>
        </div>
        <SobreModal v-model="modalOpen"></SobreModal>
        <img id="logo" src="../assets/images/qualiquiz-white.svg">
        <img id="logo-description" src="../assets/images/qualiquiz-description.svg">
      </div>
      <b-container class="content">
        <card-avaliacoes
          titulo="Manejo Covid -19"
          :dataCriacao="data"
          :concluida="concluida"
          :acertos="acertos"
        />
        <div class="content-text">
          <p> O <span class="roboto-bold">QualiQuiz</span> é uma iniciativa da Escola de Saúde Pública do Ceará para  avaliar conhecimentos, habilidades e atitudes dos profissionais de saúde. </p>
          <p> Ao responder esse quiz, você nos ajuda a conhecer melhor suas potencialidades e fragilidades, e a qualificar a nossa política de educação permanente, com base em um planejamento educacional adequado às necessidades da força de trabalho do SUS.</p>

          <h5 id="nameQuiz" class="mx-0 mx-sm-0">
            {{ nameQuiz }}
          </h5>

          <p> {{ description }}</p>
        </div>

        <div class="button">
          <PurpleButton
            @click="iniciarQuiz"
            class="text-center"
            label="INICIAR AVALIAÇÃO"
          />
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import PurpleButton from '../components/UX/PurpleButton'
import SobreModal from '../components/UX/SobreModal'
import Swiper from 'swiper'
import Loading from '../components/Loading'
import { mapGetters, mapActions } from 'vuex'
import CardAvaliacoes from '../components/Home/CardAvaliacoes.vue'
import moment from 'moment'

export default {
  components: {
    PurpleButton,
    Loading,
    SobreModal,
    CardAvaliacoes
  },
  data () {
    return {
      showLoading: false,
      img: require('../assets/images/blank.png'),
      modalOpen: false,
      concluida: true,
      acertos: 4,
      data: moment().format('LL')
    }
  },
  computed: {
    ...mapGetters('quiz', {
      nameQuiz: 'getName',
      timeLimit: 'getTimeLimit',
      currentQuestion: 'getCurrentQuestion',
      description: 'getDescription'
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
    },
    openModal () {
      this.modalOpen = !this.modalOpen
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
    font-family: 'Roboto';
  }

  .header-logo {
    position: relative;
    height: 118px;
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
  #div-sobre {
    display: flex;
    justify-content: flex-end;
    width: 95%;
  }
  #logoSobre {
    width: 20px;
    height: 20px;
  }
  #buttonSobre {
    position: absolute;
    top: 18px;
    right: 18px;
    background-color:#61459B;
    border: none;
    padding: 0px !important;
    line-height: unset !important;
  }
  #logo {
    width: 203px;
    height: 40px;
    left: 86px;
    top: 28px;
  }

  #logo-description{
    width: 202px;
    height: 10px;
    left: 87px;
    top: 74px;
    margin-top: 6px;
  }

  #nameQuiz{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 11px;
    margin-top: 26px;
    padding: 0;
  }

  .content-text{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px 16px;
  }

  .content-text > p {
    padding: 0px;
    line-height: 22px;
    font-size: 14px;
  }

  .button{
    display: flex;
    justify-content: flex-end;
    padding: 0px 16px 24px 0px;
    width: 100%;
  }

  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    height: calc(100% - 150px);
    box-sizing: border-box;
    padding:0;
}
</style>
