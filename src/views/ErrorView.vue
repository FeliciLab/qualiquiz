<template>
  <div clas="error">
    <div class="text">
      Error 404
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorView'
}
</script>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}

.text {
  color: grey;
  font-size: 48pt;
}
</style>
