<template>
    <div class="position-absolute background">
        <b-container>
        <Header
          dark
          title="Tempo Esgotado"
        />
        <div class="d-flex justify-content-center">
          <b-img
            fluid
            :src="blank"
          ></b-img>
        </div>
        <p class="mx-4 text-center f-12">Infelizmente você não concluiu o seu questionário a Tempo.</p>
        <p
          class="mx-4 text-center"
          style="font-family: OpenSans-Bold"
        >
          As questões respondidas serão enviadas normalmente.
        </p>
      </b-container>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  data () {
    return {
      blank: require('../assets/images/blank.png')
    }
  }
}
</script>
