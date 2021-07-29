<template>
  <div>
    <div v-for="(item, index) in answers" :key="index">
      <question-feedback-item :isCorrect="item.acerto" :questionOrder="item.ordem_questao"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuestionFeedbackItem from './QuestionFeedbackItem.vue'

export default {

  name: 'QuestionFeedbackList',

  components: {
    QuestionFeedbackItem
  },

  computed: {
    ...mapGetters('feedback', {
      explanations: 'getExplanations',
      answers: 'getAnswers'
    })

  }
}
</script>
<style lang="scss" scoped>
  .feedback-item{
    height: 93px;
    left: 16px;
    top: 207px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039);
    border-radius: 16px;
    padding: 3px;
  }
</style>
