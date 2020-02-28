<template>
  <b-container>
    <b-row>
      <b-col
        col="12"
        lg="6"
      >
        <Question
          :question="question"
        />
      </b-col>
    </b-row>
    <NavegationButton/>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Question from './Question'
import NavegationButton from './NavegationButton'

export default {
  name: 'Questions',
  components: {
    Question,
    NavegationButton
  },
  mounted () {
    this.setTestQuestions()
  },
  computed: {
    ...mapGetters('questions', { question: 'currentQuestion' })
  },
  methods: {
    ...mapActions('questions', {
      setTestQuestions: 'setTestQuestions'
    })
  }
}
</script>

<style scoped>

</style>
