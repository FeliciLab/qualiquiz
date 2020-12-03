<template>
  <b-row>
    <b-col
      cols="6"
    >
    <Button
      @click="$emit('change-previous')"
      class="text-center py-3"
      color="light"
      icon-class="icon-arrow-left-grey"
      v-if="question.number !== 1"
    />
    </b-col>
    <b-col cols="6">
    <Button
      @click="$emit('change-next')"
      class="text-center py-3"
      color="success"
      :label="changeLabel"
      icon-class="icon-arrow-right"
    />
    </b-col>
  </b-row>
</template>

<script>
import Button from '../Button'
import { mapGetters } from 'vuex'

export default {
  name: 'NavegationButton',
  components: {
    Button
  },
  computed: {
    ...mapGetters('quiz', { question: 'getQuestion' }),
    changeLabel: function () {
      if (this.question.number === 10) {
        return 'Finalizar'
      }
      return 'Próxima'
    }
  }
}
</script>
