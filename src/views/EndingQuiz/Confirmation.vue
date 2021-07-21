<template>
  <BodyFinish>
    <template v-slot:actions>
      <div class='action-buttons-row'>
        <NoButton @click="$router.push({ name: 'Question' })" />
        <SendButton @click="$emit('finish')" />
      </div>
    </template>
  </BodyFinish>
</template>

<script>
import BodyFinish from './BodyFinish'
import SendButton from '../../components/UX/SendButton'
import NoButton from '../../components/UX/NoButton'

export default {
  components: {
    BodyFinish,
    SendButton,
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
