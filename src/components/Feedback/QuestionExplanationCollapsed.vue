<template>
  <div>
    <div class=correct-item>
      <span>{{correctItem}}</span>
      <span>Collapsed here</span>

    </div>
    <!-- <div class="feedback-video">
      {{feedbackVideo}}
    </div>
    <div class="feedback-text">
      {{feedbackText}}
    </div> -->
  </div>
</template>

<script>

export default {
  props: {
    corretcItem: {
      type: Array,
      default: () => []
    }
  /*     feedbackVideo: {
      type: String,
      default: ''
    },
    feedbackText: {
      type: String,
      default: ''
    } */
  },
  name: 'QuestionExplanationCollapsed',

  components: {
  },

  computed: {

  }
}
</script>
<style lang="scss" scoped>

</style>
