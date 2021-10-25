<template>
  <div class="circle">
    <img
      class="timeout"
      src="../../assets/icons/timeout.svg"
      alt="icone_timeout"
    />
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
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.timeout {
  height: 60px;
  margin-bottom: 12px;
}
.label {
  font-size: 16px;
  line-height: 16px;
  color: $light;
}
</style>
