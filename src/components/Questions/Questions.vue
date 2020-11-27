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
        <Question
          :question="question"
        />
      </b-col>
    </b-row>
    <NavegationButton
      :question-number="question.number"
      @changePrevious="changePrevious"
      @changeNext="changeNext"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Question from './Question'
import NavegationButton from './NavegationButton'

export default {
  name: 'Questions',
  components: {
    Question,
    NavegationButton
  },
  mounted () {
    this.setTestQuestions()
  },
  computed: {
    ...mapGetters('questions', { question: 'currentQuestion', amountQuestions: 'amountQuestions' })
  },
  methods: {
    ...mapActions('questions', {
      setTestQuestions: 'setTestQuestions',
      setCurrentQuestion: 'setCurrentQuestion'
    }),
    changeNext () {
      this.$refs.currentQuestion.classList.value = 'animated faster fadeOutLeft'
      setTimeout(() => {
        if ((this.question.number + 1) > this.amountQuestions) {
          this.$router.push({ name: 'Confirmation' })
          return
        }
        this.setCurrentQuestion(this.question.number + 1)
        this.$refs.currentQuestion.classList.value = 'animated faster fadeInRight'
      }, 600)
    },
    changePrevious () {
      if ((this.question.number - 1) <= 0) {
        return
      }
      this.$refs.currentQuestion.classList.value = 'animated faster fadeOutRight'
      setTimeout(() => {
        this.setCurrentQuestion(this.question.number - 1)
        this.$refs.currentQuestion.classList.value = 'animated faster fadeInLeft'
      }, 600)
    }
  }
}
</script>

<style scoped>

</style>
