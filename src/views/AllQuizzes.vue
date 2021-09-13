<template>
  <div>
    <b-tabs
      fill
      justified
      no-nav-style
      nav-wrapper-class="nav-wrapper"
      active-nav-item-class="active-nav-item"
      content-class="content"
    >
      <b-tab active>
        <template #title>
          <div class="title">
            <b-icon-exclamation-triangle class="mb-1" font-scale="1.5" />
            <span>Novas</span>
          </div>
        </template>
        <ListingCardsVertical :data="userQuizzesDisponiveis" />
      </b-tab>
      <b-tab>
        <template #title>
          <div class="title">
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
import { mapGetters } from 'vuex'
import ListingCardsVertical from '../components/UX/ListingCardsVertical'

export default {
  name: 'AllQuizzes',
  components: {
    ListingCardsVertical
  },
  computed: {
    ...mapGetters('quiz', {
      userQuizzesDisponiveis: 'getUserQuizzesDisponiveis',
      userQuizzesConcluidas: 'getUserQuizzesConcluidas'
    })
  }
}
</script>

<style lang="scss">
.content {
  margin-top: 16px;
}

.nav-wrapper {
  background-color: $purple;
  box-shadow: 0px 0.5px 1.75px rgba(0, 0, 0, 0.039),
    0px 1.85px 6.25px rgba(0, 0, 0, 0.19);
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;
}

.title {
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

  .title {
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
