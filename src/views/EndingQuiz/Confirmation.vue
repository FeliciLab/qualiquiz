<template>
  <BodyFinish>
    <template v-slot:actions>
      <div class='action-buttons-row'>
        <NoButton @click="onClick()" />
        <PurpleButton @click="$emit('finish')" label="ENVIAR RESPOSTAS" />
      </div>
    </template>
  </BodyFinish>
</template>

<script>
import BodyFinish from './BodyFinish'
import PurpleButton from '../../components/UX/PurpleButton'
import NoButton from '../../components/UX/NoButton'
import { mapActions } from 'vuex'

export default {
  components: {
    BodyFinish,
    PurpleButton,
    NoButton
  },
  methods: {
    ...mapActions('quiz', ['setCurrentQuestion']),
    onClick () {
      console.log('onClick')
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
