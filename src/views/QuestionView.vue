<template>
    <div class="background">
      <div id="quiz-name" class="roboto-bold">{{ quizName }}</div>
      <breadcrumbs-questions />
      <QuestionsList />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BreadcrumbsQuestions from '../components/BreadcrumbsQuestions.vue'
import QuestionsList from '../components/Questions/QuestionsList.vue'

export default {
  name: 'QuestionView',
  components: {
    QuestionsList,
    BreadcrumbsQuestions
  },
  computed: {
    ...mapGetters('quiz', {
      quizName: 'getName',
      numberOfQuestions: 'getNumberOfQuestions',
      currentQuestion: 'getCurrentQuestion'
    })
  }
}
</script>

<style lang="scss" scoped>
  .background {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #quiz-name{
    font-size: 20px;
    padding: 33px 16px 0 16px;
  }
</style>
