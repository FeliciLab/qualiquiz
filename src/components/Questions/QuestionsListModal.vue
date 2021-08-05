<template>
  <div
    id="QuestionsListModal"
    v-if="amountQuestions > 0"
    ref="currentQuestion"
  >
    <div id="content-question-modal">
      <QuestionModal
        v-for="(q, index) in questions"
        :key="index"
        :question="q"
        v-show="index === currentQuestion"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import QuestionModal from './QuestionModal.vue'

export default {
  name: 'QuestionsList',
  components: {
    QuestionModal
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
      setCurrentQuestion: 'setCurrentQuestion',
      addTimeSpentQuestion: 'addTimeSpentQuestion'
    })
    /*  toUp () {
      const a = document.createElement('a')
      a.href = '#QuestionsList'
      a.click()
    } */
  }
}
</script>

<style
  lang="scss"
scoped>
#QuestionsListModal{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 40px);
}
#content-question-modal{
  margin: 10px 0px;
  padding: 16px 16px 16px 16px;
}

</style>
