<template>
  <b-row class="nav-bar">
    <b-col
      class="my-3"
      cols="6"
    >
    <TimestampFooter />
    </b-col>
    <b-col class="py-3 d-flex justify-content-end" cols="6">
    <Button
      @click="$emit('change-next')"
      class="text-center"
      color="success"
      :disabled="!hasAlternativeChose"
      :label="changeLabel"
      :icon-class="changeIcon"
    />
    </b-col>
  </b-row>
</template>

<script>
import Button from '../Button.vue'
import { mapGetters } from 'vuex'
import TimestampFooter from './TimestampFooter.vue'

export default {
  name: 'NavegationButton',
  components: {
    Button,
    TimestampFooter
  },
  computed: {
    ...mapGetters('quiz', { question: 'getCurrentQuestion' }),
    ...mapGetters('quiz', ['getNumberOfQuestions', 'getIfAnsweredQuestion']),
    changeLabel: function () {
      const currentQuestion = this.question + 1
      return currentQuestion === this.getNumberOfQuestions ? 'FINALIZAR' : 'PRÓXIMO'
    },
    hasAlternativeChose: function () {
      return this.getIfAnsweredQuestion
    },
    changeIcon: function () {
      const currentQuestion = this.question + 1
      return currentQuestion === this.getNumberOfQuestions ? 'icon-check' : 'icon-play-arrow'
    }
  }
}

</script>
<style
  lang="scss"
  scoped
>
  .nav-bar {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14),
                0px 4px 5px rgba(0, 0, 0, 0.12),
                0px 1px 10px rgba(0, 0, 0, 0.2);
    background: white;
    border-radius: 16px 16px 0px 0px;
    margin-right: 0px;
    margin-left: 0px;
    align-items: center;
  }
</style>
