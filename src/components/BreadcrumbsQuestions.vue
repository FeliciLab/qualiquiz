<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="m-2 number-question d-flex align-items-center justify-content-center"
      :class="stylesClasses(index, question)"
      @click="setCurrentQuestion(index)"
    >
      <span>
        {{ index + 1 }}
      </span>
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
        'answered-question': this.answers.find(answer => answer.questionId === question.id)
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
