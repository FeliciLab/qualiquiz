<template>
    <div class="position-absolute gradient-background">
        <Header light title="Parabéns"/>
        <div>
            <b-img fluid :src="success"></b-img>
        </div>
        <p class="text-center text-uppercase text-white" style="font-family: 'OpenSans-Bold'">Enviado com sucesso!</p>
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
      success: require('../assets/images/confirm.png')
    }
  }
}
</script>
