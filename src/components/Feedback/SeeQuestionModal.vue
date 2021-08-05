<template>
  <Modal>
    <template v-slot:header>
      <div id="header-question">
        <slot name="title" id="question-icon"></slot>
        <NakedButton @click="$emit('close')" label="X" color="#61459B" bgColor="#FFFFFF" />
      </div>
    </template>
    <template v-slot:body>
      <QuestionsListModal/>
    </template>
    <template v-slot:footer>
      <PurpleButton @click="$emit('close')" label="FECHAR" />
    </template>
  </Modal>
</template>

<script>
import QuestionsListModal from '../Questions/QuestionsListModal'
import Modal from '../UX/Modal'
import NakedButton from '../UX/NakedButton'
import PurpleButton from '../UX/PurpleButton'

export default {
  props: {
    questionOrder: {
      type: Number,
      default: 0
    }
  },
  name: 'SeeQuestionModal',
  components: {
    Modal,
    NakedButton,
    PurpleButton,
    QuestionsListModal
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
