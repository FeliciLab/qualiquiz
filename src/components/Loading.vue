<template>
  <div class="loading-body">
    <img class="animated infinite pulse"
    id="logoQualiquiz" fluid src="../assets/images/QualiQuiz.svg" />
    <div class="loading-progress-bar animated infinite pulse">
    <b-img
      id="ProgressBar"
      fluid
      :src="loadingLine"
    ></b-img>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loadingLine: require('../assets/images/ProgressBar.svg')
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.loading-body{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.loading-progress-bar{
  margin-top: -2.5rem;
}
</style>
