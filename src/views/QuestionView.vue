<template>
    <div class="background">
      <div id="fixed-header">
        <div id="quiz-name" class="roboto-bold">{{quizName}}</div>
        <breadcrumbs-questions />
      </div>
      <QuestionsList id="question-list"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BreadcrumbsQuestions from '../components/BreadcrumbsQuestions.vue'
import QuestionsList from '../components/Questions/QuestionsList.vue'

export default {
  name: 'QuestionView',
  components: {
    QuestionsList,
    BreadcrumbsQuestions
  },
  computed: {
    ...mapGetters('quiz', {
      quizName: 'getName',
      numberOfQuestions: 'getNumberOfQuestions',
      currentQuestion: 'getCurrentQuestion'
    })
  }
}
</script>

<style lang="scss" scoped>
  .background {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #quiz-name{
    font-size: 20px;
    padding: 24px 16px 0 16px;
    height: 86px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  #fixed-header{
    position: fixed;
    z-index: 9999;
    background-color: #f5f5f5;
    padding-bottom: 16px;
    height: 130px;
  }
  #question-list{
    margin-top: 130px;
  }
</style>
