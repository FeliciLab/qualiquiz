<template>
    <div class="background">
        <h5 class="text-center text-uppercase">Bem-vindo(a)</h5>
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div v-for="content in contents" :key="content.text" class="swiper-slide d-flex justify-content-center flex-column">
                    <div class="card mx-4">
                        <small class="text-center text-uppercase my-2">O que é?</small>
                        <h5 class="text-center text-uppercase txt-orange">Teste de progresso</h5>
                        <b-img fluid :src="content.img"></b-img>
                        <p class="text-center px-5 f-12">{{content.text}}
                        </p>
                    </div>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination position-relative"></div>
        </div>
        <Button class="text-center mt-3" id="'formSubmit'" :color="'success'" :label="'Iniciar avaliação'" :icon="'icon-arrow'" />
    </div>
</template>

<style lang="scss" scoped>
    small {
        font-family: 'OpenSans-Bold';
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .txt-orange {
        color: $burning-orange;
    }
    .f-12 {
        font-size: 12px;
    }
    .swiper-pagination {
        bottom: 0 !important;
    }
    .swiper-pagination-bullet
    .swiper-pagination-bullet-active {
        margin: 5px
    }
    .swiper-pagination ::v-deep
    .swiper-pagination-bullet-active {
        background-color: $burning-orange !important;
    }
</style>

<script>
import Button from '../components/Button'
import Swiper from 'swiper'
export default {
  components: { Button },
  data () {
    return {
      contents: [
        {
          text: 'É uma ferramenta de avaliação longitudinal, de estudantes e de programas educacionais.',
          img: require('../assets/images/blank.png')
        },
        {
          text: 'Ele situa o estudante em seu processo evolutivo de ensino-aprendizagem.',
          img: require('../assets/images/blank.png')
        },
        {
          text: 'Além de permitir à instituição realizar o diagnóstico do programa educacional ao longo do curso.',
          img: require('../assets/images/blank.png')
        }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      spaceBetween: -10
    })
  }
}
</script>
