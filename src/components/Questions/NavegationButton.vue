<template>
  <b-row>
    <b-col
      cols="6"
    >
    <a href="#header">
      <Button
        @click="$emit('changePrevious')"
        class="text-center py-3"
        color="light"
        icon-class="icon-arrow-left-grey"
        v-if="question.number !== 1"
      />
    </a>
    </b-col>
    <b-col cols="6">
    <a href="#header">
      <Button
        @click="$emit('changeNext')"
        class="text-center py-3"
        color="success"
        :label="changeLabel"
        icon-class="icon-arrow-right"
      />
    </a>
    </b-col>
  </b-row>
</template>

<script>
import Button from '../Button'
import { mapGetters } from 'vuex'
export default {
  name: 'Navegation',
  props: ['questionNumber'],
  components: {
    Button
  },
  computed: {
    ...mapGetters('questions', { question: 'currentQuestion' }),
    changeLabel: function () {
      if (this.question.number === 10) {
        return 'Finalizar'
      }
      return 'Próxima'
    }
  }
}
</script>
