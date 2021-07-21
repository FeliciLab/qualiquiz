<template>
  <button @click="$emit('click')" class="purple-button">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {
      default: ''
    }
  },
  name: 'PurpleButton'
}
</script>

<style lang="scss" scoped>
.purple-button {
  background-color: $purple;
  border-radius: 49px;
  display: inline-block;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  border-color: rgba(0, 0, 0, 0%);
  padding: 10px 22px;
}
</style>
