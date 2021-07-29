<template>
  <div>
    <Title id="top-explanation">Seu desempenho</Title>
    <SumaryQuiz class="mt-18" />
    <question-feedback-item />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '../Title'
import SumaryQuiz from './SumaryQuiz'
import QuestionFeedbackItem from './QuestionFeedbackItem.vue'

export default {
  name: 'FeedbackContent',

  components: {
    Title,
    SumaryQuiz,
    QuestionFeedbackItem
  },

  computed: {
    ...mapGetters('feedback', {
      explanations: 'getExplanations'
    })
  }
}
</script>
