<template>
  <button
    ref="button-alternative"
    class="alternative my-2"
    @click="$emit('click', answerOption.character)"
  >
    <b-row class="py-2">
      <b-col
        cols=2
        class="character"
      >
        {{ answerOption.character }}
      </b-col>
      <b-col cols=10 class="text-left">
        {{ answerOption.answer }}
      </b-col>
    </b-row>
  </button>
</template>

<script>
export default {
  name: 'AnswerOption',
  props: {
    answerOption: {
      required: true,
      type: Object
    },
    answered: {}
  },
  watch: {
    answered () {
      if (this.answered && this.answerOption.character === this.answered.answer) {
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