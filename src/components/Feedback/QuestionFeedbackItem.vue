<template>
  <div class="feedback-item">
    <div>
      <QuestionNumberIcon id="question-number-icon" :isCorrect="isCorrect" :questionOrder="questionOrder" />
    </div>
    <div v-if="knowMore" class=collapsed>
      <QuestionExplanationCollapsed
        :correctAlternativeText="getTextCorrectAlternative(questionId, correctAlternative)"
        :questionId="questionId"
        :explanation="getDescription(questionOrder)"
      />
    </div>
    <div class="buttons">
      <NakedButton
        id="show-modal"
        @click="onShowModal(questionOrder)"
        label="VER QUESTÃO"
        color="#000000"
        bgColor="#FFFFFF"
      />
      <SeeQuestionModal
        v-if="showModal"
        @close="showModal = false"
        :questionOrder="questionOrder"
      >
        <template v-slot:title>
          <QuestionNumberIcon :isCorrect="isCorrect" :questionOrder="questionOrder" />
        </template>
      </SeeQuestionModal>
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
import { mapActions, mapGetters } from 'vuex'
import NakedButton from '../UX/NakedButton.vue'
import QuestionNumberIcon from './QuestionNumberIcon.vue'
import QuestionExplanationCollapsed from './QuestionExplanationCollapsed.vue'
import SeeQuestionModal from './SeeQuestionModal.vue'

export default {
  props: {
    isCorrect: {
      type: Number,
      default: 0
    },
    questionOrder: {
      type: Number,
      default: 0
    },
    questionId: {
      type: Number,
      default: 0
    },
    correctAlternative: {
      type: Number,
      default: 0
    }
  },
  name: 'QuestionFeedbackItem',

  components: {
    NakedButton,
    QuestionNumberIcon,
    QuestionExplanationCollapsed,
    SeeQuestionModal
  },

  data () {
    return {
      knowMore: false,
      showModal: false
    }
  },
  computed: {
    ...mapGetters('feedback', {
      explanations: 'getExplanations'
    }),
    ...mapGetters('quiz', {
      questions: 'getQuestions'
    })
  },
  methods: {
    ...mapActions('quiz', {
      setCurrentQuestion: 'setCurrentQuestion'
    }),
    getDescription (id) {
      return this.explanations.find(exp => exp.questao === id)?.descricao
    },
    getTextCorrectAlternative (questionId, alternativeId) {
      const alternatives = this.questions.find(question => question.id === questionId)?.alternativas
      for (const property in alternatives) {
        if (alternatives[property].id === alternativeId) {
          return alternatives[property].alternativa
        }
      }
    },
    onShowModal (qOrder) {
      this.showModal = true
      this.setCurrentQuestion(qOrder - 1)
    }
  }
}
</script>
<style lang="scss" scoped>
  #question-number-icon {
    margin-left: 17.5px;
    margin-top: 16px;
  }
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
