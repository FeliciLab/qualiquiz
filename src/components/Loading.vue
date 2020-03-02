<template>
  <div class="d-flex flex-wrap align-content-center justify-content-center vh-100">
    <div class="w-100">
      <b-img
        class="my-5 animated infinite pulse"
        style="width:100%;"
        fluid
        :src="loadingLine"
      ></b-img>
    </div>
    <div style="position: fixed; z-index: 10; bottom: 0; left: 37%;">
      <p class="my-5 text-center loading">Carregando...</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loadingLine: require('../assets/images/loadingLines.png')
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .loading {
    color: $crusoe;
    font-family: OpenSans-Bold;
  }
</style>
