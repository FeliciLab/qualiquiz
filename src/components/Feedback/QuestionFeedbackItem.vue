<template>
  <div class="feedback-item">
    <div>
        <QuestionNumberIcon />
    </div>
    <div>
        <NakedButton label="VER QUESTÃO" color="#000000" bgColor="#FFFFFF" />
        <NakedButton label="REVISAR" color="#61459B" bgColor="#FFFFFF" />
    </div>
  </div>
</template>

<script>
import NakedButton from '../UX/NakedButton.vue'

export default {
  name: 'QuestionFeedbackItem',

  components: {
    NakedButton
  },

  computed: {

  }
}
</script>
<style lang="scss" scoped>
  .feedback-item{
    height: 93px;
    left: 16px;
    top: 207px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039);
    border-radius: 16px;
    padding: 3px;
  }
</style>
