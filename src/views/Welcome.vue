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
          <ListingCardsHorizontal :data="getUserQuizzesDisponiveis" />
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
          <ListingCardsVertical :data="getUserQuizzesConcluidas" />
        </div>
        <NotContentCard mesage="alasdasdasd" />
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Swiper from 'swiper'
import Loading from '../components/Loading'
import HeaderLogo from '../components/HeaderLogo.vue'
import ListingCardsHorizontal from '../components/UX/ListingCardsHorizontal'
import ListingCardsVertical from '../components/UX/ListingCardsVertical'
import NakedButton from '../components/UX/NakedButton'
import NotContentCard from '../components/NotContentCard.vue'

export default {
  components: {
    Loading,
    HeaderLogo,
    ListingCardsHorizontal,
    ListingCardsVertical,
    NakedButton,
    NotContentCard
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
      answers: 'getAnswers',
      timeLimit: 'getTimeLimit',
      currentQuestion: 'getCurrentQuestion',
      description: 'getDescription',
      getUserQuizzesDisponiveis: 'getUserQuizzesDisponiveis',
      getUserQuizzesConcluidas: 'getUserQuizzesConcluidas'
    })
  },
  methods: {
    ...mapActions('clock', ['initClock']),
    ...mapActions('quiz', ['initUserQuizzes']),
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
    console.log(this.userQuizzes)

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

.swiper-pagination {
  bottom: 0 !important;
}

.swiper-pagination-bullet .swiper-pagination-bullet-active {
  margin: 5px;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
  background-color: $burning-orange !important;
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
  padding: 16px 16px 0;
}

.label-title {
  font-size: 24px;
  margin: 0;
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
  justify-content: center;
}

.wrapper-vertical-list {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}
</style>
