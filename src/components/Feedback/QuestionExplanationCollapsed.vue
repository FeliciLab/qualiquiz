<template>
  <div class="collapsed">
    <div class="correct-item roboto-bold">
      <span>{{correctAlternativeText}}</span>
    </div>
    <div v-html="explanation">
    </div>
  </div>
</template>

<script>

export default {
  props: {
    correctAlternativeText: {
      type: String,
      default: ''
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
  .correct-item {
    color: #0D8E48;
    padding-top: 12px;
    padding-bottom: 8px;
  }
  .collapsed{
    padding: 0px 16px 0px 16px;
  }
  iframe{
    border: 8px solid red;
  }
</style>
