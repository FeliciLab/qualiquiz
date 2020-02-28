<template>
    <div class="position-absolute gradient-background">
        <b-img class="position-absolute" style="top: 20%;width:100%" fluid :src="lines"></b-img>
        <Header light title="Parabéns"/>
        <div class="d-flex justify-content-center">
            <b-img class="animated infinite pulse delay-3s" fluid :src="success"></b-img>
        </div>
        <p class="text-center text-uppercase text-white mt-5" style="font-family: OpenSans-Bold">Enviado com sucesso!</p>
    </div>
</template>

<style lang="scss" scoped>
  .gradient-background {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, $crusoe 0%, $forest-green 100%) no-repeat center center fixed;
  }
</style>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  data () {
    return {
      success: require('../assets/images/confirm.png'),
      lines: require('../assets/images/lines.png')
    }
  }
}
</script>
