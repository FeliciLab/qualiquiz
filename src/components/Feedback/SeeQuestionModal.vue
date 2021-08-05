<template>
  <Modal>
    <template v-slot:header>
      <div>
        <slot name="title"></slot>
        <NakedButton label="X" color="#61459B" bgColor="#FFFFFF" />
      </div>
    </template>
    <template v-slot:body>
    </template>
    <template v-slot:footer>
    </template>
  </Modal>
</template>

<script>
import Modal from '../UX/Modal'
import NakedButton from '../UX/NakedButton'

export default {
  name: 'SeeQuestionModal',
  components: {
    Modal,
    NakedButton
  }
}

</script>

<style lang="scss" scoped>

</style>
