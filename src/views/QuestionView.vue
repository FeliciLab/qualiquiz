<template>
    <div>
      <breadcrumbs-questions/>
      <QuestionsList />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuestionsList from '../components/Questions/QuestionsList'
import BreadcrumbsQuestions from '../components/BreadcrumbsQuestions'

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
