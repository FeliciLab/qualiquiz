<template>
  <button @click="$emit('click')" class="no-button">VOLTAR</button>
</template>

<script>
export default {
  name: 'NoButton'
}
</script>

<style lang="scss" scoped>
.no-button {
  background-color: white;
  color: $purple;
  font-size: 14px;
  padding: 3px 22px;
  font-weight: bold;
  border: none;
}
</style>
