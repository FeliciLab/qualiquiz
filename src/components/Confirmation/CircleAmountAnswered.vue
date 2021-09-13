<template>
  <div class="circle">
    <div class="label">Você respondeu</div>
    <div class="number">{{ answered }}</div>
    <div class="label">questões</div>
  </div>
</template>

<script>
export default {
  name: 'CircleAmountAnswered',
  props: {
    answered: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  background-color: $purple;
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
}
.number {
  font-family: 'Roboto-Bold';
  font-size: 100px;
}
</style>
