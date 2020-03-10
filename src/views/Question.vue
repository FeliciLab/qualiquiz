<template>
  <div>
    <b-container>
      <Header
        dark
        :title="`Questão ${currentIndex} / ${amountQuestions}`"
      />
      <b-row>
        <b-col cols=12>
          <TimestampBar/>
          <BreadcrumbsQuestions/>
        </b-col>
      </b-row>
      <Questions/>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Header from '../components/Header'
import Questions from '../components/Questions/Questions'
import BreadcrumbsQuestions from '../components/BreadcrumbsQuestions'
import TimestampBar from './TimestampBar'

export default {
  components: {
    TimestampBar,
    Header,
    Questions,
    BreadcrumbsQuestions
  },
  computed: {
    ...mapState('questions', {
      currentIndex: 'current'
    }),
    ...mapGetters('questions', {
      amountQuestions: 'amountQuestions'
    })
  }
}
</script>
