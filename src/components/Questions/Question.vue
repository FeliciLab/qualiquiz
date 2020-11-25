<template>
  <div>
    <b-row class="mx-3">
      <p>{{ question.questao }}</p>
    </b-row>
    <b-row class="mx-3">
      <b-col
        cols="12"
        md=6
        v-for="(alternative, index) in question.alternativas"
        :key="index"
      >
        <AnswerOption
          @click="setAnswerChosen"
          :alternative="alternative"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AnswerOption from './AnswerOption'

export default {
  name: 'Question',
  components: {
    AnswerOption
  },
  computed: {
    ...mapGetters('quiz', {
      question: 'getQuestion',
      answers: 'getAnswers',
      answerModel: 'getAnswerModel'
    })
  },
  methods: {
    ...mapActions('quiz', {
      setAnswer: 'setAnswer'
    }),
    setAnswerChosen (id) {
      this.setAnswer({
        ...this.answerModel,
        questionId: this.question.id,
        alternativeId: id
      })
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .alternative {
    cursor: pointer;
    transition: all .2s ease-out;
    background: none;
    box-shadow: 0 0 0 transparent;
    border: 1px solid $white-smoke;
    text-shadow: 0 0 0 transparent;
    border-radius: 6px;

    &:hover {
      background: none;
      color: #4c4c4c;
    }

    &:focus {
      outline: none;
      color: $forest-green !important;
      border: 1px solid $forest-green;
      border-radius: 6px;
    }
  }
</style>
