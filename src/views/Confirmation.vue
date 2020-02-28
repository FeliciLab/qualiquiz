<template>
    <div class="position-absolute background">
        <b-container>
            <Header dark title="Confirmação"/>
            <div class="d-flex justify-content-center">
                <b-img fluid :src="blank"></b-img>
            </div>
            <p class="mx-4 text-center f-12">Você está prestes a enviar todas as questões e finalizar esta avaliação. Uma vez enviada, você não poderá alterar as respostas para esta tentativa.</p>
            <p class="mx-4 text-center" style="font-family: OpenSans-SemiBold">
                Você realmente deseja enviar todas as questões?
            </p>
            <b-row>
                <b-col cols=6>
                    <Button class="text-center py-3" id="formSubmit" color="danger" label="Não" iconClass="icon-cross" />
                </b-col>
                <b-col cols=6>
                    <Button class="text-center py-3" id="formSubmit" color="success" label="Sim" iconClass="icon-check" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from '../components/Header'
import Button from '../components/Button'

export default {
  components: {
    Button, Header
  },
  data () {
    return {
      blank: require('../assets/images/blank.png')
    }
  }
}
</script>
