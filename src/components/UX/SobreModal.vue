<template>
    <Modal v-show="value">
      <template v-slot:header>
        <div id="header">
            <p id="titleText" class="roboto-bold">Sobre o Qualiquiz</p>
            <NakedButton id="button-x"
             @click="close"
             label="X"
             ></NakedButton>
        </div>
    </template>
    <template v-slot:body>
      <div id="corpoText">
          <p> O <span class="roboto-bold">QualiQuiz</span> é uma iniciativa da Escola de Saúde Pública do Ceará para  avaliar conhecimentos, habilidades e atitudes dos profissionais de saúde. </p>
          <p> Ao responder esse quiz, você nos ajuda a conhecer melhor suas potencialidades e fragilidades, e a qualificar a nossa política de educação permanente, com base em um planejamento educacional adequado às necessidades da força de trabalho do SUS.</p>
      </div>
    </template>
    <template v-slot:footer>
      <NakedButton
      @click="close"
      color="#000000A3"
      label="VOLTAR"
      />
    </template>
    </Modal>
</template>

<script>
import Modal from '../UX/Modal'
import NakedButton from '../UX/NakedButton'

export default {
  name: 'SobreModal',
  components: {
    Modal,
    NakedButton
  },
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  #header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
  }
  #corpoText {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Roboto;
    color:$black64;
    font-size: 14px;
    line-height: 22px;
  }
  #titleText {
    font-size: 20px;
    color:$black87;
    margin-bottom: 0px !important;
  }
  #button-x {
    height: 14px;
    width: 14px;
    color: $black64;
  }
</style>
