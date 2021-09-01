<template>
  <div class="card-avaliacao">
    <div class="titulo-avaliacao roboto-bold">{{titulo}}</div>
    <div class="data-criacao">{{dataCriacao}}</div>
    <progresso-acertos id="barra-progresso" v-if="concluida" :acertos="acertos" />
    <!-- TODO ACAO DO BOTAO E NOME DO BOTAO DE ACORDO COM CONCLUIDA -->
    <NakedButton
      id="button-iniciar"
      :label="labelBotao"
      color="#61459B"
      bgColor="#FFFFFF"
      @click="FALTASETAR"
    />
  </div>
</template>
<script>
import NakedButton from '../UX/NakedButton.vue'
import ProgressoAcertos from './ProgressoAcertos.vue'
export default {
  name: 'CardAvaliacoes',
  data () {
    return {
      labelBotao: this.concluida ? 'REVISAR' : 'INICIAR'
    }
  },
  props: {
    titulo: {
      required: true,
      type: String
    },
    dataCriacao: {
      required: true,
      type: Date
    },
    concluida: {
      type: Boolean,
      default: false
    },
    acertos: {
      required: true,
      type: Number
    }
  },
  components: { NakedButton, ProgressoAcertos }
  /* methods () {
    acaoBotao: this.concluida ?
  } */
}
</script>
<style lang="scss" scoped>
   .card-avaliacao{
    width: 100%;
    height: 150px;// altura de acordo com acertos.
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039), 0px 7px 24px rgba(0, 0, 0, 0.19);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  .titulo-avaliacao{
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 8px;
  }
  .data-criacao{
    height: 16px;
    font-family: Roboto;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: $black64;
    margin-bottom: 12px;
  }
  #barra-progresso{
    justify-content: center;
  }
  #button-iniciar{
    align-self: flex-end;
    margin-top: 12px;
  }
</style>
