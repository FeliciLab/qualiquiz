<template>
  <BodyFinish>
    <template v-slot:actions>
      <div class='action-buttons-row'>
        <NoButton @click="$router.push({ name: 'Question' })" />
        <PurpleButton @click="$emit('finish')" label="ENVIAR RESPOSTAS" />
      </div>
    </template>
  </BodyFinish>
</template>

<script>
import BodyFinish from './BodyFinish'
import PurpleButton from '../../components/UX/PurpleButton'
import NoButton from '../../components/UX/NoButton'

export default {
  components: {
    BodyFinish,
    PurpleButton,
    NoButton
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
