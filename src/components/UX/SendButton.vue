<template>
  <button @click="$emit('click')" class="send-button">ENVIAR RESPOSTAS</button>
</template>

<script>
export default {
  name: 'SendButton'
}
</script>

<style lang="scss" scoped>
.send-button {
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
