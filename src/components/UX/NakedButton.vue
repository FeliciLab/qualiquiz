<template>
  <button @click="$emit('click')" :style="cssVars" class="no-button roboto-bold">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {
      default: ''
    },
    color: {
      default: ''
    },
    bgColor: {
      default: ''
    }
  },
  computed: {
    cssVars () {
      return {
        color: this.color,
        'background-color': this.bgColor
      }
    }
  },
  name: 'NakedButton'
}
</script>

<style lang="scss" scoped>
.no-button {
  background-color: white;
  font-size: 14px;
  padding: 3px 22px;
  font-weight: bold;
  border: none;
}
</style>
