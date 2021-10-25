<template>
  <div class="circle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CircleSucessResult'
}
</script>

<style lang="scss" scoped>
.circle {
  background-color: white;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $green;
}
</style>
