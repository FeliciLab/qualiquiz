<template>
    <div class="background">
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
</style>
