<template>
  <div>
    <div v-show="showLoading">
      <Loading></Loading>
    </div>
    <div v-show="!showLoading" class="animated fadeIn position-absolute background">
      <b-container>
        <Header
          dark
          title="Confirmação"
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
        <p class="mx-4 text-center f-12">Você respondeu {{ amountAnswers }} / {{ amountQuestions}} questões e está prestes a enviar todas as questões e finalizar esta avaliação. Uma vez
          enviada, você não poderá alterar as respostas para esta tentativa.</p>
        <p
          class="mx-4 text-center"
          style="font-family: OpenSans-SemiBold"
        >
          Você realmente deseja enviar todas as questões?
        </p>
        <b-row>
          <b-col cols=6>
            <Button
              @click="$router.push({name: 'Question'})"
              class="text-center py-3"
              id="formSubmit"
              color="danger"
              label="Não"
              iconClass="icon-cross"
            />
          </b-col>
          <b-col cols=6>
            <Button
              @click="showLoadingPage()"
              class="text-center py-3"
              id="formSubmit"
              color="success"
              label="Sim"
              iconClass="icon-check"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>

</style>

<script>
import Header from '../components/Header'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { mapGetters } from 'vuex'
export default {
  components: {
    Button, Header, Loading
  },
  data () {
    return {
      showLoading: false,
      blank: require('../assets/images/blank.png')
    }
  },
  computed: {
    ...mapGetters('questions', {
      amountQuestions: 'amountQuestions'
    }),
    ...mapGetters('student', {
      amountAnswers: 'amountAnswers'
    })
  },
  methods: {

    showLoadingPage () {
      this.showLoading = true
      setTimeout(() => {
        this.$router.push({ name: 'Success' })
      }, 3000)
    }
  }
}
</script>
