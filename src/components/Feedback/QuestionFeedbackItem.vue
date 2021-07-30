<template>
  <div class="feedback-item">
    <div>
      <QuestionNumberIcon :isCorrect="isCorrect" :questionOrder="questionOrder" />
    </div>
    <div v-if="knowMore" class=collapsed>
      <QuestionExplanationCollapsed :correctItem="explanations" />
    </div>
    <div class="buttons">
      <NakedButton label="VER QUESTÃO" color="#000000" bgColor="#FFFFFF" />
      <div class="expand-less" v-if="knowMore">
        <img src="../../assets/images/expandLess.svg" @click="knowMore = false">
      </div>
      <NakedButton
        v-if="!knowMore"
        label="SAIBA MAIS"
        color="#61459B"
        bgColor="#FFFFFF"
        @click="knowMore = true" />
    </div>
  </div>
</template>

<script>
import NakedButton from '../UX/NakedButton.vue'
import QuestionNumberIcon from './QuestionNumberIcon.vue'
import QuestionExplanationCollapsed from './QuestionExplanationCollapsed.vue'

export default {
  props: {
    isCorrect: {
      type: Boolean,
      default: false
    },
    questionOrder: {
      type: Number,
      default: 0
    },
    explanations: {
      type: Array,
      default: () => []
    }
  },
  name: 'QuestionFeedbackItem',

  components: {
    NakedButton,
    QuestionNumberIcon,
    QuestionExplanationCollapsed
  },

  data () {
    return {
      knowMore: false
    }
  },
  computed: {

  }
}
</script>
<style lang="scss" scoped>
  .feedback-item{
    min-height: 93px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039);
    border-radius: 16px;
    margin: 24px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .buttons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 12px;
  }
  .expand-less{
    padding: 3px 22px;
  }
</style>
