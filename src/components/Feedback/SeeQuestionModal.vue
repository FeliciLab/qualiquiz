<template>
  <Modal>
    <template v-slot:header>
      <div id="header-question">
        <slot name="title" id="question-icon"></slot>
        <NakedButton @click="$emit('close')" label="x" color="#61459B" bgColor="#FFFFFF" />
      </div>
    </template>
    <template v-slot:body>
      <Question :question="question" resultViewOnly />
    </template>
    <template v-slot:footer>
      <NakedButton @click="$emit('close')" label="FECHAR" color="#61459B" bgColor="#FFFFFF" />
    </template>
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex'
import Question from '../Questions/Question'
import Modal from '../UX/Modal'
import NakedButton from '../UX/NakedButton'

export default {
  name: 'SeeQuestionModal',
  components: {
    Modal,
    NakedButton,
    Question
  },
  computed: {
    ...mapGetters('quiz', {
      question: 'getQuestion'
    })
  }
}

</script>

<style lang="scss" scoped>
#header-question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
}
</style>
