<template>
  <div>
    <b-row class="mx-3">
      <p>{{ question.question }}</p>
    </b-row>
    <b-row class="mx-3">
      <b-col
        cols="12"
        md=6
        v-for="(alternative, index) in question.alternatives"
        :key="index"
      >
        <AnswerOption
          @click="setAnswerChosen"
          :answer-option="alternative"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions('student', {
      setAnswer: 'setAnswer'
    }),
    setAnswerChosen (answer) {
      this.setAnswer(
        {
          answer,
          number: this.question.number
        }
      )
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
