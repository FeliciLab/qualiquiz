<template>
  <button
    ref="button-alternative"
    class="alternative my-2 w-100"
    @click="$emit('click', alternative.id)"
    :class="{ chosen: answerTrue() }"
  >
    <b-row class="py-2">
      <b-col
        cols=2
        class="character"
      >
        {{ caracterAlternative }}
      </b-col>
      <b-col cols=10 class="text-left">
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
    }),
    caracterAlternative () {
      const options = ['A', 'B', 'C', 'D', 'E']
      return options[(this.alternative.ordem - 1)]
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
  .character {
    font-family: OpenSans-Bold;
    font-size: 2.5rem;
  }

  .chosen {
    outline: none;
    color: $forest-green !important;
    border: 1px solid $forest-green;
    border-radius: 6px;
  }

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
