<template>
  <div>
    <b-button
      @click="$emit('click')"
      type="typeBtn"
      :class="{
      'btn-light': color == 'light',
      'btn-gradient-success': color == 'success',
      'btn-gradient-danger': color == 'danger'}"
      pill
      size="lg"
      :id="id"
    >
      <div
        class="d-flex f-16"
        style="font-family: OpenSans-Bold"
        v-if="label.length > 0"
      >
        <span>{{label}}</span>
        <span
          class="icon ml-3 align-self-center"
          :class="{[iconClass] : true}"
        ></span>
      </div>
      <div class="d-flex">
        <span class="icon m-1" :class="{[iconClass] : true}" v-if="label.length <= 0"></span>
      </div>
    </b-button>
  </div>
</template>
<script>
export default {
  props: {
    id: {},
    color: {},
    label: {
      default: ''
    },
    iconClass: {},
    typeBtn: {
      default: 'button'
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .btn-light {
    background-color: white;
    border: 2px solid $silver;
  }
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
