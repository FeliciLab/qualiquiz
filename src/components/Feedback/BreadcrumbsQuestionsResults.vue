<template>
  <div class="breadcrumbs-questions-result mt-18">
    <div v-for="(answer, index) in answers" :key="index">
      <CircleQuestionResult :right="Boolean(answer.acerto)">
        <a :href="`#explanation-question-${answer.ordem_questao}`">
          {{ answer.ordem_questao }}
        </a>
      </CircleQuestionResult>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CircleQuestionResult from './CircleQuestionResult'

export default {
  name: 'BreadcrumbsQuestionsResults',

  components: {
    CircleQuestionResult
  },

  computed: {
    ...mapGetters('feedback', {
      answers: 'getAnswers'
    })
  }
}
</script>

<style lang="scss" scoped>
a,
a:active,
a:hover,
a:visited {
  color: inherit;
}
.breadcrumbs-questions-result {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 13px;
}
</style>
