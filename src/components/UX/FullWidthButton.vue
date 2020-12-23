<template>
  <button
    @click="$emit('click')"
    class="full-width-button"
    :class="color"
  >
    <slot></slot>
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
  border-radius: 4px;
  font-size: 14px;
}
.green-inverted {
  background-color: $green;
  border-color: white;
  border-style: solid;
  color: white;
  &:focus {
    background-color: white;
    color: $green;
  }
}
</style>
