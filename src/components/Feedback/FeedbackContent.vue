<template>
  <div>
    <Title id="top-explanation">Seu desempenho</Title>
    <SumaryQuiz class="mt-18" />
    <breadcrumbs-questions-results />
    <QuestionsExplanations />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BreadcrumbsQuestionsResults from './BreadcrumbsQuestionsResults'
import Title from '../Title'
import SumaryQuiz from './SumaryQuiz'
import QuestionsExplanations from './QuestionsExplanations'

export default {
  name: 'FeedbackContent',

  components: {
    Title,
    SumaryQuiz,
    BreadcrumbsQuestionsResults,
    QuestionsExplanations
  },

  computed: {
    ...mapGetters('feedback', {
      explanations: 'getExplanations'
    })
  }
}
</script>
