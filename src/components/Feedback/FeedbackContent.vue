<template>
  <div>
    <Title id="top-explanation">Seu desempenho</Title>
    <SumaryQuiz class="mt-18" />
    <question-feedback-list />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '../Title'
import SumaryQuiz from './SumaryQuiz'
import QuestionFeedbackList from './QuestionFeedbackList.vue'

export default {
  name: 'FeedbackContent',

  components: {
    Title,
    SumaryQuiz,
    QuestionFeedbackList
  },

  computed: {
    ...mapGetters('feedback', {
      explanations: 'getExplanations'
    })
  }
}
</script>
