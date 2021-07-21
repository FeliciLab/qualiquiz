<template>
  <button
    ref="button-alternative"
    class="alternative my-2 w-100"
    @click="$emit('click', alternative.id)"
    :class="{ chosen: answerTrue() }"
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
    color: $black64 !important;
    border: 1px solid $forest-green;
    border-radius: 6px;
  }

  .alternative {
    cursor: pointer;
    transition: all .2s ease-out;
    background: none;
    box-shadow: 0 0 0 transparent;
    border: 1px solid $gray400;
    text-shadow: 0 0 0 transparent;
    border-radius: 16px;
    padding: 12px 16px;

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
