<template>
  <div>
    <BottomNavigation />
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
            <b-icon-exclamation-triangle class="mb-1" font-scale="1.5" />
            <span>Novas</span>
          </div>
        </template>
        <ListingCardsVertical :data="userQuizzesDisponiveis" />
      </b-tab>
      <b-tab>
        <template #title>
          <div class="tab">
            <b-icon-check-circle-fill class="mb-1" font-scale="1.5" />
            <span>Concluídas</span>
          </div>
        </template>
        <ListingCardsVertical :data="userQuizzesConcluidas" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListingCardsVertical from '../components/UX/ListingCardsVertical'
import BottomNavigation from '../components/UX/BottomNavigation'

export default {
  name: 'AllQuizzes',
  components: {
    ListingCardsVertical,
    BottomNavigation
  },
  computed: {
    ...mapGetters('quiz', {
      userQuizzesDisponiveis: 'getUserQuizzesDisponiveis',
      userQuizzesConcluidas: 'getUserQuizzesConcluidas'
    })
  },
  methods: {
    ...mapActions('bottomNavigation', ['setActionSelected'])
  },
  mounted () {
    this.setActionSelected('quizzes')
  }
}
</script>

<style lang="scss">
.tabs {
  height: 100vh;
  padding-bottom: 72px;
}

.content {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

/* Tive que fazer isso para ajustar no centro. */
.not-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: calc(100vh - 250px);
}

.nav-wrapper {
  background-color: $purple;
  box-shadow: 0px 0.5px 1.75px rgba(0, 0, 0, 0.039),
    0px 1.85px 6.25px rgba(0, 0, 0, 0.19);
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;
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
