<template>
  <body-finish />
</template>

<script>
import BodyFinish from './BodyFinish.vue'

export default {
  components: {
    BodyFinish
  },
  mounted () {
    this.$emit('finish')
  }
}
</script>
