<template>
  <div
    class="circle-question"
    :class="right ? 'right-circle' : 'wrong-circle'"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CircleQuestionResult',
  props: {
    right: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-question {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 2;
  margin: 0px 10px;
}

.right-circle {
  background-color: $green;
}
.wrong-circle {
  background-color: $red;
}
</style>
