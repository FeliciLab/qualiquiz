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
        <p
          class="mx-4 text-center"
          style="font-family: OpenSans-Bold"
        >
          Você respondeu {{ amountAnswers }} / {{ amountQuestions}}
        </p>
        <p class="mx-4 text-center f-12">Infelizmente você não concluiu o seu questionário a Tempo.</p>
        <p
          class="mx-4 text-center"
          style="font-family: OpenSans-Bold"
        >
          <strong>Aguarde a confirmação</strong>! Estamos enviando as questões que foram respondidas.
        </p>
      </b-container>
    </div>
</template>

<script>
import Header from '../components/Header'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Header
  },
  data () {
    return {
      blank: require('../assets/images/blank.png')
    }
  },
  computed: {
    ...mapGetters('quiz', {
      amountQuestions: 'getNumberOfQuestions',
      amountAnswers: 'getNumberOfAnswers',
      answers: 'getAnswers',
      id: 'getId'
    }),
    ...mapGetters('authentication', {
      token: 'getToken'
    }),
    ...mapGetters('application', ['getDevelopment']),
    ...mapGetters('clock', ['timeSpent'])
  },
  methods: {
    ...mapActions('quiz', ['saveAnswers']),
    sendAnswers () {
      this.saveAnswers({ token: this.token, devMode: this.getDevelopment, timeSpent: this.timeSpent })
        .then(() => {
          this.redirectConfirmation()
        })
    },
    redirectConfirmation () {
      setTimeout(() => {
        this.$router.push({ name: 'Success' })
      }, 3000)
    }
  },
  mounted () {
    if (this.amountAnswers <= 0 || this.id === 0) {
      return this.redirectConfirmation()
    }

    this.sendAnswers()
  }
}
</script>
