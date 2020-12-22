<template>
  <div>
    <div v-show='showLoading'>
      <Loading />
    </div>

    <div
      v-show='!showLoading'
      class='animated fadeIn position-absolute background'
    >
      <b-container>
        <div class='center mt-50'>
          <Title title='QUESTÕES RESPONDIDAS' />
        </div>
        <div class='center mt-45'>
          <AmountAnsweredCard />
        </div>
        <p class='mt-50 text-center text-answered'>
          VOCÊ RESPONDEU {{ amountAnswers }} DE {{ amountQuestions }} QUESTÕES
        </p>

        <p class='mx-13 mt-18 text-helper'>
          Você pode revisar as questões ou finalizar o quiz para ver o seu
          resultado. Após enviar suas respostas, não será possível realizar
          novas tentativas.
        </p>

        <p class='mt-18 text-form'>Deseja enviar as respostas agora?</p>

        <div class='action-buttons-row'>
          <NoButton @click="$router.push({ name: 'Question' })" />
          <YesButton @click='showLoadingPage()' class='ml-55' />
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Title from '../components/Title'
import Loading from '../components/Loading'
import AmountAnsweredCard from '../components/Confirmation/AmountAnsweredCard'
import YesButton from '../components/UX/YesButton'
import NoButton from '../components/UX/NoButton'

export default {
  components: {
    Title,
    Loading,
    AmountAnsweredCard,
    YesButton,
    NoButton
  },
  data () {
    return {
      showLoading: false,
      blank: require('../assets/images/blank.png')
    }
  },
  computed: {
    ...mapGetters('quiz', {
      amountQuestions: 'getNumberOfQuestions',
      amountAnswers: 'getNumberOfAnswers',
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
    showLoadingPage () {
      this.showLoading = true
      if (this.id === 0) {
        setTimeout(() => {
          this.$router.push({ name: 'Success' })
        }, 1000)

        return
      }

      this.saveAnswers({
        token: this.token,
        devMode: this.getDevelopment,
        timeSpent: this.timeSpent
      }).then(() => {
        this.$router.push({ name: 'Success' })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mx-13 {
  margin-left: 13px;
  margin-right: 13px;
}
.mt-50 {
  margin-top: 50px;
}
.mt-45 {
  margin-top: 45px;
}
.mt-18 {
  margin-top: 18px;
}
.ml-55 {
  margin-left: 55px;
}
.text-answered {
  color: $orange;
  font-weight: 400;
  font-size: 16px;
}
.text-helper {
  font-size: 14px;
}
.text-form {
  font-size: 16px;
  font-family: 'Roboto-Bold';
  text-align: center;
}
.action-buttons-row {
  display: flex;
  justify-content: center;
}
</style>
