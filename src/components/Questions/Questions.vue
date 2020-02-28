<template>
  <div v-if="amountQuestions > 0">
    <b-row>
      <b-col
        cols="12"
        lg="6"
      >
        <Question
          :question="question"
        />
      </b-col>
    </b-row>
    <NavegationButton/>
  </div>
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
    ...mapGetters('questions', { question: 'currentQuestion', amountQuestions: 'amountQuestions' })
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
