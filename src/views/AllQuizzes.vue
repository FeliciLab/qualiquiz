<template>
  <BottomNavigation selected="quizzes">
    <Loading v-show="isLoading" />
    <b-tabs
      fill
      justified
      class="tabs"
      no-nav-style
      nav-wrapper-class="nav-wrapper"
      active-nav-item-class="active-nav-item"
      content-class="content"
    >
      <b-tab active>
        <template #title>
          <div class="tab">
            <b-icon-exclamation-triangle-fill class="mb-1" font-scale="1.5" />
            <span>Novas</span>
          </div>
        </template>
        <ListingCardsVertical
          :data="userQuizzesDisponiveis"
          :class="userQuizzesDisponiveis.length <= 0 ? 'not-content' : ''"
          notContentMesage="Você ainda não possui novas avaliações.
Aguarde que logo estará disponível!"
        />
      </b-tab>
      <b-tab>
        <template #title>
          <div class="tab">
            <b-icon-check-circle-fill class="mb-1" font-scale="1.5" />
            <span>Concluídas</span>
          </div>
        </template>
        <ListingCardsVertical
          :data="userQuizzesConcluidas"
          :class="userQuizzesConcluidas.length <= 0 ? 'not-content' : ''"
          notContentMesage="Você ainda não possui avaliações concluídas.
Responda a sua primeira avaliação!"
        />
      </b-tab>
    </b-tabs>
  </BottomNavigation>
</template>

<script>
import ListingCardsVertical from '../components/UX/ListingCardsVertical'
import BottomNavigation from '../components/layouts/BottomNavigationContainer'
import Loading from '../components/Loading'
import quizRequest from '../services/quizRequest'

export default {
  name: 'AllQuizzes',
  components: {
    ListingCardsVertical,
    BottomNavigation,
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

<style lang="scss">
.content {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
}

.not-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: calc(100vh - 168px);
}

.nav-wrapper {
  top: 0;
  width: 100%;
  position: fixed;
  background-color: $purple;
  box-shadow: 0px 0.5px 1.75px rgba(0, 0, 0, 0.039),
    0px 1.85px 6.25px rgba(0, 0, 0, 0.19);
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;
  z-index: 9999;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 64px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #dadada;
}

.active-nav-item {
  position: relative;

  .tab {
    color: #ffffff;
  }

  &:after {
    content: '';
    background: #ffffff;
    position: absolute;
    bottom: 0;
    left: 10%;
    height: 2px;
    border-radius: 1px;
    width: 80%;
  }
}
</style>
