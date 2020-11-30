<template>
  <div
    v-if="amountQuestions > 0"
    ref="currentQuestion"
    class="animated faster fadeIn"
  >
    <b-row>
      <b-col
        cols="12"
      >
        <Question/>
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
    toUp () {
      const a = document.createElement('a')
      a.href = '#question-view-top-id'
      a.click()
    },
    changeNext () {
      this.changeAnimation(this.currentQuestion + 1)
    },
    changePrevious () {
      if ((this.question.number - 1) <= 0) {
        return
      }

      this.changeAnimation(this.currentQuestion - 1)
    },
    changeAnimation (newCurrent) {
      this.$refs.currentQuestion.classList.value = 'animated faster fadeOut'

      setTimeout(() => {
        if ((newCurrent) >= this.amountQuestions) {
          this.$router.push({ name: 'Confirmation' })
          return
        }

        this.setCurrentQuestion(newCurrent)
        this.$refs.currentQuestion.classList.value = 'animated faster fadeIn'
        this.toUp()
      }, 600)
    }
  }
}
</script>

<style scoped>

</style>
