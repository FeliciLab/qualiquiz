<template>
  <div class="d-flex flex-wrap justify-content-center breadcrumbs">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="number-question d-flex align-items-center justify-content-center"
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
  .number-question {
    border-radius: 16px;
    width: 14vw;
    left: 71.8px;
    height: 12px;
    background-color: $gray5;
    margin: 2.5vw;
  }

  .answered-question {
    background-color: $purple;
    width: 14vw;
    border-radius: 16px;
    color: $purple;
    margin: 2.5vw;
  }
  .breadcrumbs {
    padding-top: 24px;
  }
</style>
