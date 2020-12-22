<template>
  <div class="title text-center">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
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
