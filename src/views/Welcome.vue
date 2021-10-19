<template>
  <BottomNavigationContainer selected="home">
    <Loading v-show="isLoading" />

    <div class="background">
      <HeaderLogo />
      <b-container class="content">
        <div class="title">
          <h1 class="label-title roboto-bold">Avaliações disponíveis</h1>
        </div>
        <div class="wrapper-horizontal-list">
          <ListingCardsHorizontal
            :data="userQuizzesDisponiveis"
            notContentMesage="Você ainda não possui novas avaliações.
            Aguarde que logo estará disponível!"
          />
        </div>
        <div class="wrapper-button">
          <b-button
            class="btn-todas-avaliacoes"
            variant="link"
            @click="handdleGoToAllQuizzes"
          >
            TODAS AVALIAÇÕES<b-icon-chevron-right></b-icon-chevron-right>
          </b-button>
        </div>
        <div class="title">
          <h1 class="label-title roboto-bold">Avaliações concluídas</h1>
        </div>
        <div class="wrapper-vertical-list">
          <ListingCardsVertical
            :data="userQuizzesConcluidas"
            notContentMesage="Você ainda não possui avaliações concluídas.
            Responda a sua prmeira avaliação!"
          />
        </div>
      </b-container>
    </div>
  </BottomNavigationContainer>
</template>

<script>
import HeaderLogo from '../components/HeaderLogo'
import Loading from '../components/Loading'
import ListingCardsHorizontal from '../components/UX/ListingCardsHorizontal'
import ListingCardsVertical from '../components/UX/ListingCardsVertical'
import routerNames from '../router/routerNames'
import BottomNavigationContainer from '../components/layouts/BottomNavigationContainer'
import quizRequest from '../services/quizRequest'

export default {
  name: 'Welcome',
  components: {
    HeaderLogo,
    ListingCardsHorizontal,
    ListingCardsVertical,
    BottomNavigationContainer,
    Loading
  },
  data: function () {
    return {
      userQuizzesDisponiveis: [],
      userQuizzesConcluidas: [],
      isLoading: true
    }
  },
  methods: {
    handdleGoToAllQuizzes () {
      this.$router.push(routerNames.quizzes)
    },
    async handleRequest () {
      try {
        const data = await quizRequest.getUserQuizzes()
        this.userQuizzesDisponiveis = data.filter(quiz => !quiz.respondido)
        this.userQuizzesConcluidas = data.filter(quiz => quiz.respondido)
      } catch (error) {
        // TODO: tratar melhor esse erro depois
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted () {
    this.handleRequest()
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
  width: 100%;
}

.wrapper-button {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: px;
  justify-content: center;
}

.wrapper-vertical-list {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}

.btn-todas-avaliacoes {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: #6200ee;
}
</style>
