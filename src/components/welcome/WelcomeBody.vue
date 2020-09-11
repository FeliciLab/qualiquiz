<template>
  <div class="welcome-content">
    <div class="welcome-sturcture">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WelcomeContent'
}
</script>

<style scoped>
  .welcome-content {
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 2rem;
    padding: 2rem;
    min-height: 300px;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(255, 225, 181, 0.5);
  }
  .welcome-sturcture {
    font-size: 16pt;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
