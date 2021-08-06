<template>
  <div class="breadcrumbs-questions">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="breadcrumbs-item"
      :class="stylesClasses(index, question)"
    >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BreadcrumbsQuestions',
  computed: {
    ...mapGetters('quiz', {
      questions: 'getQuestions',
      answers: 'getAnswers',
      currentQuestion: 'getCurrentQuestion'
    }),
    quesntionAnswered () {
      return this.questions.filter(question => {
        return this.answers.find(answer => answer.number === question.number)
      }).reduce((accumulated, current) => {
        accumulated[current.number] = true
        return accumulated
      }, {})
    }
  },
  methods: {
    ...mapActions('quiz', ['setCurrentQuestion']),
    stylesClasses (index, question) {
      return {
        'number-question-active': this.currentQuestion === (index),
        'answered-question': this.answers.find(answer => answer.questionId === question.id && answer.alternativeId >= 0)
      }
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .breadcrumbs-questions {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding-top: 24px;
    width: 100%;
  }
  .breadcrumbs-item {
    border-radius: 16px;
    width: 20%;
    height: 12px;
    background-color: $gray5;
    margin: 0px 8px;
  }
  .number-question-active {
    background-color: #fff !important;
    border: 1px solid $purple !important;
  }
  .answered-question {
    background-color: $purple;
  }
</style>
