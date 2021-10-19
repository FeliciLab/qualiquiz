<template>
  <div>
    <div v-show="showLoading">
      <Loading></Loading>
    </div>
    <div class="background" id="loading" v-show="!showLoading">
      <div id="container-body">
        <h5 class="text-title">
          {{ nameQuiz }}
        </h5>
        <p class="quiz-description">
          {{ description }}
        </p>
        <p id="body-text" class="roboto" v-html="bodyText"></p>
      </div>
      <div id="init-quiz-bottom">
        <PurpleButton
          @click="iniciarQuiz"
          class="text-center"
          id="formSubmit"
          color="success"
          label="INICIAR AVALIAÇÃO"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PurpleButton from '../components/UX/PurpleButton.vue'
import Swiper from 'swiper'
import Loading from '../components/Loading.vue'
export default {
  name: 'InitQuiz',
  components: {
    PurpleButton,
    Loading
  },
  data () {
    return {
      showLoading: false,
      bodyText: `
      Ao confimar esta ação você irá dar início a sua avaliação. Sua pontuação e tempo só serão contabilizados no histórico após a conclusão.
      `
    }
  },
  computed: {
    ...mapGetters('quiz', {
      nameQuiz: 'getName',
      timeLimit: 'getTimeLimit',
      currentQuestion: 'getCurrentQuestion',
      description: 'getDescription',
      getCurrentQuizId: 'getCurrentQuizId'
    })
  },
  methods: {
    ...mapActions('quiz', ['initUserQuizzes', 'initQuiz']),
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
    this.initQuiz({
      codQuiz: this.getCurrentQuestion
    })
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
#loading {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
#container-body {
  padding: 0 16px;
}
#init-quiz-bottom {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 24px 0;
}
#body-text {
  font-size: 14px;
  color: $black64;
}
.text-title {
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.25px;
  font-size: 34px;
  padding: 16px 0 24px 0;
}
</style>
