<template>
  <div>
    <div>
      <b-row class="mx-3">
        <p class="question">{{ question.questao }}</p>
        <p class="sub-title">Selecione uma alternativa</p>
      </b-row>
    </div>
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
import AnswerOption from './AnswerOption.vue'

export default {
  name: 'Question',
  props: {
    question: { require: true }
  },
  components: {
    AnswerOption
  },
  computed: {
    ...mapGetters('quiz', {
      // question: 'getQuestion',
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
  .question{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: $dark;
  }
  .sub-title{
    color: $black64;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
  }
</style>
