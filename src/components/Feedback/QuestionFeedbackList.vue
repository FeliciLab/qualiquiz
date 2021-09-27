<template>
  <div class="question-list">
    {{ answers }}
    <div v-for="(item, index) in answers" :key="index">
      <QuestionFeedbackItem
        :isCorrect="item.acerto"
        :questionOrder="item.ordem_questao"
        :correctAlternative="item.cod_alternativa_correta"
        :questionId="item.cod_questao"
      />
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
.question-list {
  padding: 10px;
}
</style>
