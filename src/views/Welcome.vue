<template>
  <div>
    <div v-show="showLoading">
      <Loading></Loading>
    </div>
    <div class="position-absolute background" v-show="!showLoading">
      <HeaderLogo />
      <b-container class="content">
        <div class="title">
          <h1 class="label-title roboto-bold">Avaliações disponíveis</h1>
        </div>
        <div class="wrapper-horizontal-list">
          <ListingCardsHorizontal />
        </div>
        <div class="wrapper-button">
          <NakedButton
            label="TODAS AVALIAÇÕES >"
            bgColor="transparent"
            color="#6200EE"
          />
        </div>
        <div class="title">
          <h1 class="label-title roboto-bold">Avaliações concluídas</h1>
        </div>
        <div class="wrapper-vertical-list">
          <ListingCardsVertical />
        </div>
      </b-container>
      <!--
      <b-container class="content">
        <div class="content-text">
          <p>
            O <span class="roboto-bold">QualiQuiz</span> é uma iniciativa da
            Escola de Saúde Pública do Ceará para avaliar conhecimentos,
            habilidades e atitudes dos profissionais de saúde.
          </p>
          <p>
            Ao responder esse quiz, você nos ajuda a conhecer melhor suas
            potencialidades e fragilidades, e a qualificar a nossa política de
            educação permanente, com base em um planejamento educacional
            adequado às necessidades da força de trabalho do SUS.
          </p>

          <h5 id="nameQuiz" class="mx-0 mx-sm-0">
            {{ nameQuiz }}
          </h5>

          <p>{{ description }}</p>
        </div>

        <div class="button">
          <PurpleButton
            @click="iniciarQuiz"
            class="text-center"
            label="INICIAR AVALIAÇÃO"
          />
        </div>
      </b-container>
      -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import PurpleButton from '../components/UX/PurpleButton'
import Swiper from 'swiper'
import Loading from '../components/Loading'
import HeaderLogo from '../components/HeaderLogo.vue'
import ListingCardsHorizontal from '../components/UX/ListingCardsHorizontal'
import ListingCardsVertical from '../components/UX/ListingCardsVertical'
import NakedButton from '../components/UX/NakedButton'

export default {
  components: {
    // PurpleButton,
    Loading,
    HeaderLogo,
    ListingCardsHorizontal,
    ListingCardsVertical,
    NakedButton
  },
  data () {
    return {
      showLoading: false,
      img: require('../assets/images/blank.png'),
      modalOpen: false
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

<style lang="scss" scoped>
small {
  font-family: 'Roboto';
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

.swiper-pagination-bullet .swiper-pagination-bullet-active {
  margin: 5px;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
  background-color: $burning-orange !important;
}
#nameQuiz {
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

.content-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px 16px;
}

.content-text > p {
  padding: 0px;
  line-height: 22px;
  font-size: 14px;
}

.button {
  display: flex;
  justify-content: flex-end;
  padding: 0px 16px 24px 0px;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: calc(100% - 150px);
  box-sizing: border-box;
  padding: 0;
}

.title {
  display: flex;
  padding: 16px;
}

.label-title {
  font-size: 24px;
}

.wrapper-horizontal-list {
  display: flex;
}

.wrapper-button {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

.wrapper-vertical-list {
  display: flex;
}
</style>
