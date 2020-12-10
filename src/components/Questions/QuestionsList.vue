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
    }),
    ...mapGetters('clock', {
      timeLeft: 'timeLeft',
      timeSpent: 'timeSpent',
      secondLimit: 'secondLimit'
    })
  },
  methods: {
    ...mapActions('quiz', {
      setCurrentQuestion: 'setCurrentQuestion',
      addTimeSpentQuestion: 'addTimeSpentQuestion'
    }),
    toUp () {
      const a = document.createElement('a')
      a.href = '#question-view-top-id'
      a.click()
    },
    setTimeFinish (id) {
      this.addTimeSpentQuestion({ questionId: id, finish: this.timeSpent })
    },
    setTimeStart (id) {
      this.addTimeSpentQuestion({ questionId: id, start: this.timeSpent })
    },
    changeNext () {
      this.changeQuestion(this.currentQuestion + 1)
    },
    changePrevious () {
      this.changeQuestion(this.currentQuestion - 1)
    },
    changeQuestion (newCurrent) {
      this.setTimeFinish(this.question.id)

      if (newCurrent < 0) {
        return
      }

      this.$refs.currentQuestion.classList.value = 'animated faster fadeOut'

      setTimeout(() => {
        if ((newCurrent) >= this.amountQuestions) {
          this.$router.push({ name: 'Confirmation' })
          return
        }

        this.setCurrentQuestion(newCurrent)
        this.setTimeStart(this.question.id)
        this.$refs.currentQuestion.classList.value = 'animated faster fadeIn'
        this.toUp()
      }, 600)
    }
  },
  mounted () {
    if (this.currentQuestion === 0) {
      this.addTimeSpentQuestion({ questionId: this.question.id, start: 0 })
    }
  }
}
</script>

<style scoped>
</style>
