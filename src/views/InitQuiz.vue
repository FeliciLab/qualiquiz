<template>
  <div>
    <div v-show="showLoading">
      <Loading />
    </div>
    <h1>{{ getCurrentQuizId }}</h1>
    <h1>{{this.getToken}}</h1>
    <h1>teste</h1>
    <div class="button">
          <PurpleButton
            @click="iniciarQuiz"
            class="text-center"
            label="INICIAR AVALIAÇÃO"
          />
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PurpleButton from '../components/UX/PurpleButton.vue'
import Loading from '../components/Loading.vue'
export default {
  name: 'InitQuiz',
  components: {
    PurpleButton,
    Loading
  },
  data () {
    return {
      showLoading: false
    }
  },
  computed: {
    ...mapGetters('quiz', {
      nameQuiz: 'getName',
      timeLimit: 'getTimeLimit',
      currentQuestion: 'getCurrentQuestion',
      description: 'getDescription',
      getCurrentQuizId: 'getCurrentQuizId'
    }),
    ...mapGetters('authentication', ['getToken']),
    ...mapGetters('application', ['getDevelopment'])
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
      codQuiz: this.getCurrentQuestion,
      devMode: this.getDevelopment,
      auth: this.getToken
    })
  }
}
</script>

<style lang="scss" scoped></style>
