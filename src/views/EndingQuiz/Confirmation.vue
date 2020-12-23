<template>
  <BodyFinish>
    <template v-slot:actions>
      <div class='action-buttons-row'>
        <NoButton @click="$router.push({ name: 'Question' })" />
        <YesButton @click="$emit('finish')" class='ml-55' />
      </div>
    </template>
  </BodyFinish>
</template>

<script>
import BodyFinish from './BodyFinish'
import YesButton from '../../components/UX/YesButton'
import NoButton from '../../components/UX/NoButton'

export default {
  components: {
    BodyFinish,
    YesButton,
    NoButton
  }
}
</script>

<style lang='scss' scoped>
.action-buttons-row {
  display: flex;
  justify-content: center;
}
</style>
