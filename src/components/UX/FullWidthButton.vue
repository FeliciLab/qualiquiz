<template>
  <button @click="$emit('click')" class="full-width-button" :class="color">
    <slot></slot>
    <b-icon icon="arrow-down" />
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
  text-align: center;
  background-color: transparent;
  width: 100%;
  height: 36px;
  font-size: 14px;
  margin-top: 36px;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.5px;
}
.green-inverted {
  border-style: none;
  color: white;
}
.arrow {
  padding-left: 11px;
}
</style>
