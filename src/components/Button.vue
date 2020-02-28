<template>
  <div>
    <b-button :class="{
      'btn-gradient-success': color == 'success',
      'btn-gradient-danger': color == 'danger'}" pill size="lg" :id="id">
      <div class="d-flex f-16" style="font-family: OpenSans-Bold">{{label}}<span class="icon ml-3 align-self-center" :class="{[iconClass] : true}"></span></div>
    </b-button>
  </div>
</template>
<style lang="scss" scoped>
  // Fazer Mixin do btn-gradient
  .btn-gradient-success {
    background: linear-gradient(90deg, $crusoe 0%, $forest-green 100%);
    border: 2px solid #219740;
  }
  .btn-gradient-danger {
    background: linear-gradient(90deg, #FC1F2D 0%, #B61721 100%);
    border: 2px solid #FC1F2D;
  }
</style>
<script>
export default {
  props: ['id', 'color', 'label', 'iconClass']
}
</script>
