<template>
  <div>
    <div class=correct-item>
      <span>{{correctAlternative}}</span>
    </div>
    <div v-html="explanation">
    </div>
  </div>
</template>

<script>

export default {
  props: {
    correctAlternative: {
      type: Number,
      default: 0
    },
    explanation: {
      type: String,
      default: ''
    }
  },
  name: 'QuestionExplanationCollapsed'
}
</script>
<style lang="scss" scoped>

</style>
