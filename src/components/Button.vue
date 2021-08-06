<template>
  <button
    @click="disabled ? '' : $emit('click')"
    :type="typeBtn"
    :class="{
      'btn-disabled': disabled,
      'btn-light': !disabled && color == 'light',
      'btn-gradient-success': !disabled && color == 'success',
      'btn-gradient-danger': !disabled && color == 'danger',
    }"
    :disabled="disabled"
    :id="id"
    class="my-btn"
  >
    <div
      class="d-flex f-16"
      style="font-family: Roboto"
      v-if="label.length > 0"
    >
      <span
        class="icon mr-2 align-self-center"
        :class="{[iconClass] : true}"
      ></span>
      <span>{{label}}</span>
    </div>
    <div class="d-flex">
      <span class="icon m-1" :class="{[iconClass] : true}" v-if="label.length <= 0"></span>
    </div>
  </button>
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
    },
    disabled: Boolean
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .my-btn {
    background-color: $purple;
    border-radius: 49px;
    display: inline-block;
    border-radius: 50px;
    color: white;
    font-size: 14px;
    border-color: rgba(0, 0, 0, 0%);
    padding: 10px 22px;
  }
  .btn-disabled {
    border-color: rgba(0, 0, 0, 0%);
    background-color: $gray400;
  }
  .btn-light {
    background-color: white;
    border: 2px solid $silver;
  }
  // Fazer Mixin do btn-gradient
  .btn-gradient-success {
    background-color: $purple;
    border: 2px solid $purple;
  }
  .btn-gradient-danger {
    background: linear-gradient(90deg, #FC1F2D 0%, #B61721 100%);
    border: 2px solid #FC1F2D;
  }
</style>
