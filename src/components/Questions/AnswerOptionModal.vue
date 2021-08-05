<template>
  <button
    id="alternative-modal"
    ref="button-alternative"
    class="alternative my-2 w-100"
    @click="$emit('click', alternative.id)"
    :class="{ chosen: answerTrue() }"
    disabled
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
    ...mapGetters('quiz', {
      getAnswers: 'getAnswers',
      question: 'getQuestion'
    })
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
  .character {
    font-family: OpenSans-Bold;
    font-size: 2.5rem;
  }

  .chosen {
    outline: none;
    color: $light !important;
    border: 1px solid $purple;
    border-radius: 16px;
    background: $purple !important;
    border: 1px solid $gray400 !important;
  }

  .alternative {
    cursor: pointer;
    transition: all .2s ease-out;
    background: none;
    box-shadow: 0 0 0 transparent;
    border: 1px solid $gray400;
    border-radius: 16px;
    color: $black64;
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
