<template>
    <div
      class='animated fadeIn'
    >
      <div class='tela-confirmacao'>
        <div>
          <div class="roboto-bold page-title">
            Fim do quiz
          </div>
          <div class='flex-column-items-center circle-timeout'>
            <CircleTimeOut />
          </div>
            <p class='text-center text-answered roboto-bold'>
              Você Respondeu {{ amountAnswers }} de {{ amountQuestions }} questões!
            </p>

            <p class='text-helper text-center'>
               Você não conseguiu finalizar o teste a tempo, mas não se preocupe. Volte ao início e aguarde uma próxima oportunidade!
            </p>
          </div>
        <div class="button-row">
          <PurpleButton @click="onClickInicio()" label="VOLTAR AO INÍCIO" />
        </div>
      </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CircleTimeOut from '../../components/Confirmation/CircleTimeOut.vue'
import routerNames from '../../router/routerNames'
import PurpleButton from '../../components/UX/PurpleButton.vue'

export default {
  name: 'TimeOut',

  components: {
    CircleTimeOut,
    PurpleButton
  },
  methods: {
    onClickInicio () {
      this.$router.push(routerNames.welcome)
    }
  },
  computed: {
    ...mapGetters('quiz', {
      amountQuestions: 'getNumberOfQuestions',
      amountAnswers: 'getNumberOfAnswers'
    })
  }
}
</script>

<style lang='scss' scoped>
.page-title{
  font-size: 20px;
  margin: 33px 16px 0 16px;
}
.circle-timeout{
  margin-top: 56px;
}
.text-answered {
  color: #000000;
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.text-helper {
  font-size: 14px;
  color: $black87;
  margin: 25px 16px 0 16px;

}
.text-form {
  font-size: 16px;
  font-family: 'Roboto-Bold';
  text-align: center;
}
.tela-confirmacao{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
}
.button-row{
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
}
</style>
