<template>
  <BodyFinish>
    <template v-slot:actions>
      <div class='action-buttons-row'>
        <NakedButton label="REVISAR" color="#61459B" bgColor="#f4f4f4" @click="onClick()" />
        <PurpleButton @click="$emit('finish')" label="ENVIAR RESPOSTAS" />
      </div>
    </template>
  </BodyFinish>
</template>

<script>
import { mapActions } from 'vuex'
import BodyFinish from './BodyFinish'
import PurpleButton from '../../components/UX/PurpleButton'
import NakedButton from '../../components/UX/NakedButton'

export default {
  components: {
    BodyFinish,
    PurpleButton,
    NakedButton
  },
  methods: {
    ...mapActions('quiz', ['setCurrentQuestion']),
    onClick () {
      this.setCurrentQuestion(0)
      this.$router.push({ name: 'Question' })
    }
  }
}

</script>

<style lang='scss' scoped>
.action-buttons-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 16px;
}
</style>
