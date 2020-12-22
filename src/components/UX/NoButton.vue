<template>
  <button @click="$emit('click')" class="no-button">NÃO</button>
</template>

<script>
export default {
  name: 'NoButton'
}
</script>

<style lang="scss" scoped>
.no-button {
  background-color: white;
  border-radius: 4px;
  color: $green;
  font-size: 14px;
  border-color: $green;
  padding: 3px 22px;
  border-style: solid;
  border-width: 1px;
}
</style>
