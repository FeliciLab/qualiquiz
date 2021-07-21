<template>
  <button @click="$emit('click')" class="yes-button">SIM</button>
</template>

<script>
export default {
  name: 'YesButton'
}
</script>

<style lang="scss" scoped>
.yes-button {
  background-color: $green;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border-color: rgba(0, 0, 0, 0%);
  padding: 3px 22px;
}
</style>
