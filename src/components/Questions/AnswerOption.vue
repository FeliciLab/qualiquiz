<template>
  <button
    ref="button-alternative"
    class="alternative my-2 w-100"
    @click="$emit('click', alternative.id)"
    :class="alternativeClasses"
    :disabled="disabled"
  >
    <b-row>
      <b-col class="text-left">
        {{ alternative.alternativa }}
      </b-col>
    </b-row>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AnswerOption',
  props: {
    alternative: {
      required: true,
      type: Object
    },
    resultViewOnly: {
      default: false,
      type: Boolean
    }
  },
  watch: {
    getAnswers () {
      this.focusAlternative()
    },
    alternative () {
      this.focusAlternative()
    }
  },
  computed: {
    disabled () {
      return this.resultViewOnly
    },
    ...mapGetters('quiz', {
      getAnswers: 'getAnswers',
      question: 'getQuestion'
    }),
    ...mapGetters('feedback', {
      getAnswersFeedback: 'getAnswers'
    }),
    alternativeClasses () {
      const classes = { chosen: this.answerTrue() }
      if (!this.resultViewOnly) {
        return classes
      }

      return {
        alternativeCorrect: this.checkAlternativeCorrect,
        alternativeChosenCorrect: this.checkAlternativeChosenCorrect,
        alternativeChosenIncorrect: this.checkAlternativeChosenIncorrect
      }
    },
    checkAlternativeCorrect () {
      return this.getAnswersFeedback.some(
        answer => answer.questionId === this.getAnswersFeedback.cod_questao &&
          this.alternative.id === answer.cod_alternativa_correta
      )
    },
    checkAlternativeChosenCorrect () {
      return this.getAnswersFeedback.some(
        answer => answer.questionId === this.getAnswersFeedback.cod_questao &&
          this.alternative.id === answer.cod_alternativa_correta &&
          this.alternative.id === answer.cod_alternativa_marcada
      )
    },
    checkAlternativeChosenIncorrect () {
      return this.getAnswersFeedback.some(
        answer => answer.questionId === this.getAnswersFeedback.cod_questao &&
          this.alternative.id !== answer.cod_alternativa_correta &&
          this.alternative.id === answer.cod_alternativa_marcada
      )
    }
  },
  methods: {
    answerTrue () {
      return this.getAnswers
        .find(answer => answer.questionId === this.question.id &&
          answer.alternativeId === this.alternative.id
        )
    },
    focusAlternative () {
      if (this.answerTrue()) {
        this.$refs['button-alternative'].focus()
      }
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .alternativeCorrect {
    border-color: $green !important;
    border-width: 2px;
    background-color: $greenA22;
  }
  .alternativeChosenCorrect {
    background-color: $green !important;
    color: $light !important;
  }
  .alternativeChosenIncorrect {
    background-color: $red !important;
    border-color: $red !important;
    color: $light !important;
  }
  .character {
    font-family: OpenSans-Bold;
    font-size: 2.5rem;
  }
  .chosen {
    color: $light !important;
    background-color: $purple !important;
    border-color: $purple !important;
  }

  .alternative {
    box-shadow: 0 0 0 transparent;
    color: $black64;
    border-width: 1px;
    border-style: solid;
    border-color: $gray400;
    cursor: pointer;
    transition: all .2s ease-out;
    border-radius: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    padding: 12px 16px;

    &:hover {
      color: #4c4c4c;
    }

    &:focus {
      outline: none;
      color: $light !important;
      border: 1px solid $purple;
      border-radius: 16px;
      background: $purple;
    }
  }
</style>
