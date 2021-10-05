<template>
  <div class="circle">
    <img class="timeout" src="../../assets/icons/timeout.svg" alt="icone_timeout" />
    <div class="label">Seu tempo acabou!</div>
  </div>
</template>

<script>
export default {
  name: 'CircleTimeOut'
}
</script>

<style lang="scss" scoped>
.circle {
  background-color: $red;
  border-radius: 50%;
  width: 262px;
  height: 262px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.label {
  font-size: 24px;
  color: $light;
}
.number {
  font-family: 'Roboto-Bold';
  font-size: 100px;
}
</style>
