<template>
  <div>
    <div>
      <p class="question" v-html="question.questao"></p>
      <p class="roboto-bold sub-title my-3">Selecione uma alternativa</p>
    </div>

    <div
      class="alternativeColum"
      cols="12"
      md=6
      v-for="(alternative, index) in question.alternativas"
      :key="index"
    >
      <AnswerOption
        @click="setAnswerChosen"
        :alternative="alternative"
        :resultViewOnly="resultViewOnly"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AnswerOption from './AnswerOption.vue'

export default {
  name: 'Question',
  props: {
    question: { require: true },
    resultViewOnly: { default: false, type: Boolean }
  },
  components: {
    AnswerOption
  },
  computed: {
    ...mapGetters('quiz', {
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
  .alternativeColum {
    padding-left: 0px;
    padding-right: 0px;
  }
</style>
