<template>
  <div class="not-content-card">
    <img class="assignment" src="../assets/images/assignment.svg" />
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'NotContentCard',
  props: { message: { type: String, required: true, default: '' } }
}
</script>

<style lang="scss" scoped>
.not-content-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.assignment {
  width: 48px;
  height: 48px;
}

.message {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 24px;
  margin-bottom: 0;
  text-align: center;
  max-width: 300px;
}
</style>
