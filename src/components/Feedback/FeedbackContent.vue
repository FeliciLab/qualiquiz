<template>
  <div id="feedback">
    <Title id="top-explanation">Seu desempenho</Title>
    <SumaryQuiz class="mt-18" />
    <img id="feedback-bar" src="../../assets/images/feedback-bar.svg" />
    <QuestionFeedbackList class="question-list" />
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
<style lang="scss" scoped>
  #feedback{
    margin-top: 24px;
  }
  #feedback-bar{
    padding: 0px 16px;
    width: 100vw;
  }
  #top-explanation{
    color: $black87;
  }
  .question-list{
    margin: 0px 16px;
    padding: 0px;
  }
</style>
