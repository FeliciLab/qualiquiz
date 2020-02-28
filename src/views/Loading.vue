<template>
    <div>
        <b-img class="my-5 animated infinite pulse delay-3s" style="width:100%;" fluid :src="loadingLine"></b-img>
        <p class="my-5 text-center loading">Carregando..</p>
    </div>
</template>

<style lang="scss" scoped>
    .loading {
        color: $crusoe;
        font-family: OpenSans-Bold;
    }
</style>

<script>
export default {
  data () {
    return {
      loadingLine: require('../assets/images/loadingLines.png')
    }
  }
}
</script>
