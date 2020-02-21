<template>
  <div>
    <b-button class="btn-gradient" pill size="lg" :id="id" :variant="color">
      {{label}} <span :class="{'icon-md': true, icon:true }"></span>
    </b-button>
  </div>
</template>
<style lang="scss" scoped>
  // Fazer Mixin do btn-gradient
  .btn-gradient {
    background: linear-gradient(90deg, #00692C 0%, #219740 100%);
    border: 2px solid #219740;
  }
</style>
<script>
export default {
  props: ['id', 'color', 'label', 'icon']
}
</script>
