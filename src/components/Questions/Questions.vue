<template>
  <div
    v-if="amountQuestions > 0"
    ref="currentQuestion"
    class="animated fadeInLeft"
  >
    <b-row>
      <b-col
        cols="12"
        lg="6"
      >
        <Question
          :question="question"
        />
      </b-col>
    </b-row>
    <NavegationButton
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
      this.$refs.currentQuestion.classList.value = 'animated fadeOutLeft'
      setTimeout(() => {
        if ((this.question.number + 1) > this.amountQuestions) {
          this.$router.push({ name: 'Success' })
        }
        this.setCurrentQuestion(this.question.number + 1)
        setTimeout(() => {
          this.$refs.currentQuestion.classList.value = 'animated fadeInRight'
        }, 700)
      }, 1000)
    },
    changePrevious () {
      if ((this.question.number - 1) <= 0) {
        return
      }
      this.$refs.currentQuestion.classList.value = 'animated fadeOutRight'
      setTimeout(() => {
        this.setCurrentQuestion(this.question.number - 1)
        setTimeout(() => {
          this.$refs.currentQuestion.classList.value = 'animated fadeInLeft'
        }, 700)
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
