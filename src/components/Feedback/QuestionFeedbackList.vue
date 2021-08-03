<template>
  <div class="question-list">
    <div v-for="(item, index) in answers" :key="index">
      <question-feedback-item
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

  },
  data () {
    return {
      teste: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .question-list{
    padding: 10px;
  }
</style>
