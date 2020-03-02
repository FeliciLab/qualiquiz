<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="m-2 number-question d-flex align-items-center justify-content-center"
      :class="{ 'number-question-active': currentIndex === (1 + index), 'answered-question': quesntionAnswered[question.number] }"
    >
      <span>
        {{ index + 1 }}
      </span>
    </div>
  </div>
</template>

<script>
// import hasOwnProperty from '../helpers/hasOwnProperty'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BreadcrumbsQuestions',
  computed: {
    ...mapState('questions', {
      currentIndex: 'current',
      questions: 'all'
    }),
    ...mapState('student', {
      answers: 'answers'
    }),
    ...mapGetters('questions', {
      amountQuestions: 'amountQuestions'
    }),
    quesntionAnswered () {
      return this.questions.filter(question => {
        return this.answers.find(answer => answer.number === question.number)
      }).reduce((accumulated, current) => {
        accumulated[current.number] = true
        return accumulated
      }, {})
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .number-question {
    border-radius: 100%;
    width: 24px;
    height: 24px;
    background-color: $white-smoke;
    font-family: OpenSans-Bold;
    font-size: 12px;
  }

  .number-question-active {
    background: linear-gradient(90deg, $light-orange 0%, $burning-orange 100%);
    border: 1px solid $burning-orange;
    color: white !important;
  }

  .answered-question {
    background-color: $white-smoke;
    border: 1px solid $burning-orange;
    color: $burning-orange;
  }
</style>
