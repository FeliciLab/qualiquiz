<template>
  <button
    @click="$emit('click')"
    class="full-width-button"
    :class="color"
  >
    <slot></slot>
    <img class="arrow" src="@/assets/images/arrow.svg">
  </button>
</template>

<script>
export default {
  name: 'FullWidthButton',

  props: {
    color: {
      type: String,
      default: 'green-inverted'
    }
  }
}
</script>

<style lang="scss" scoped>
.full-width-button {
  background-color: none;
  background: none;
  text-align: center;
  width: 100%;
  height: 36px;
  font-size: 14px;
  padding-top: 36px;
  align-items: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.green-inverted {
  border-style: none;
  color: white;
}
.arrow{
  padding-left: 11px;
}
</style>
