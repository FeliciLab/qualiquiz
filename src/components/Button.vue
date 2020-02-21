<template>
  <div>
      <b-button :id="id" :variant="color">{{label}} <span :class="icon"></span></b-button>
  </div>
</template>
<style lang="sass" scoped>

</style>
<script>
export default {
  props: ['id', 'color', 'label', 'icon']
}
</script>
