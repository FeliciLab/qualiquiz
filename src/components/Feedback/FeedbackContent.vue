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
import BreadcrumbsQuestionsResults from './BreadcrumbsQuestionsResults.vue'
import Title from '../Title.vue'
import SumaryQuiz from './SumaryQuiz.vue'
import QuestionsExplanations from './QuestionsExplanations.vue'

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
