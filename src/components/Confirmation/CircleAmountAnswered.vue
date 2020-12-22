<template>
  <div class="circle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CircleAmountAnswered'
}
</script>

<style lang="scss" scoped>
.circle {
  background-color: $green;
  border-radius: 50%;
  width: 262px;
  height: 262px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
