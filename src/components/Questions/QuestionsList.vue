<template>
  <div
    v-if="amountQuestions > 0"
    ref="currentQuestion"
    class="animated faster fadeInLeft"
  >
    <b-row>
      <b-col
        cols="12"
      >
        <Question />
      </b-col>
    </b-row>
    <NavegationButton
      :question-number="currentQuestion"
      @change-previous="changePrevious"
      @change-next="changeNext"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Question from './Question'
import NavegationButton from './NavegationButton'

export default {
  name: 'QuestionsList',
  components: {
    Question,
    NavegationButton
  },
  computed: {
    ...mapGetters('quiz', {
      question: 'getQuestion',
      questions: 'getQuestions',
      amountQuestions: 'getNumberOfQuestions',
      currentQuestion: 'getCurrentQuestion'
    })
  },
  methods: {
    ...mapActions('quiz', {
      setCurrentQuestion: 'setCurrentQuestion'
    }),
    changeNext () {
      this.$refs.currentQuestion.classList.value = 'animated faster fadeOutLeft'
      setTimeout(() => {
        if ((this.currentQuestion + 1) >= this.amountQuestions) {
          this.$router.push({ name: 'Confirmation' })
          return
        }

        this.setCurrentQuestion(this.currentQuestion + 1)
        this.$refs.currentQuestion.classList.value = 'animated faster fadeInRight'
      }, 600)
    },
    changePrevious () {
      if ((this.question.number - 1) <= 0) {
        return
      }

      this.$refs.currentQuestion.classList.value = 'animated faster fadeOutRight'
      setTimeout(() => {
        this.setCurrentQuestion(this.currentQuestion - 1)
        this.$refs.currentQuestion.classList.value = 'animated faster fadeInLeft'
      }, 600)
    }
  }
}
</script>

<style scoped>

</style>
