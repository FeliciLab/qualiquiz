<template>
  <div class="title text-center">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scope>
.title {
  font-family: "Roboto";
  font-size: 24px;
}
</style>
