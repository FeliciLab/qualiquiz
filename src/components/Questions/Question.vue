<template>
  <b-row class="mx-3">
    <p>{{ question.question }}</p>
  </b-row>
  <b-row class="mx-3">
    <b-col
      cols="12"
      md=6
      class="alternatives"
      v-for="(alternative, index) in question.alternatives"
      :key="index"
    >
      <AnswerOption :answer-option="alternative"/>
    </b-col>
  </b-row>
</template>

<script>
import AnswerOption from './AnswerOption'

export default {
  name: 'Question',
  components: {
    AnswerOption
  },
  props: {
    question: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
