<template>
  <button class="alternative my-2">
    <b-row class="py-2">
      <b-col
        cols=2
        class="character"
      >
        {{ answerOption.character }}
      </b-col>
      <b-col cols=10>
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
    }
  }
}
</script>

<style scoped>

</style>
