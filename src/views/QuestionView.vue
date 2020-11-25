<template>
  <div>
    <b-container>
      <Header
        dark
        :title="`Questão ${currentQuestion + 1} / ${numberOfQuestions}`"
      />
      <b-row>
        <b-col cols=12>
          <TimestampBar/>
          <BreadcrumbsQuestions/>
        </b-col>
      </b-row>
      <QuestionsList />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header'
import BreadcrumbsQuestions from '../components/BreadcrumbsQuestions'
import QuestionsList from '../components/Questions/QuestionsList'
import TimestampBar from './TimestampBar'

export default {
  name: 'QuestionView',
  components: {
    TimestampBar,
    Header,
    BreadcrumbsQuestions,
    QuestionsList
  },
  computed: {
    ...mapGetters('quiz', {
      numberOfQuestions: 'getNumberOfQuestions',
      currentQuestion: 'getCurrentQuestion'
    })
  }
}
</script>
