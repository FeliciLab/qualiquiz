<template>
  <div class="welcome-body">
    <div class="welcome-content">
      <div class="welcome-sturcture">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeContent'
}
</script>

<style>
  .welcome-body {
    display: flex;
    justify-content: center;
  }
  .welcome-content {
    max-width: 90%;
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
  @media (max-width: 500px) {
    .welcome-body {
      padding: 0rem 1rem;
    }
    .welcome-sturcture {
      font-size: 13pt;
      letter-spacing: 2px;
    }
  }
</style>
