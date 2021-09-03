<template>
  <div class="card-avaliacao">
    <div class="titulo-avaliacao roboto-bold">{{ titulo }}</div>
    <div class="data-criacao">{{ dataCriacao }}</div>
    <progresso-acertos
      class="barra-progresso"
      v-if="concluida"
      :acertos="acertos"
    />
    <!-- TODO: INCLUIR ACAO DO BOTAO DE ACORDO COM PARÂMETRO CONCLUIDA - SE CONCLUIDA REVISAR SE NAO INICIAR  -->
    <div class="wrapper-button">
      <NakedButton
        :label="labelBotao"
        color="#61459B"
        bgColor="#FFFFFF"
      />
    </div>
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
}
</script>
<style lang="scss" scoped>
.card-avaliacao {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 188px;
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039), 0px 7px 24px rgba(0, 0, 0, 0.19);
}

.titulo-avaliacao {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-bottom: 8px;
}

.data-criacao {
  height: 16px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: $black64;
  margin-bottom: 12px;
}

#barra-progresso {
  justify-content: center;
}

.wrapper-button {
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
}

</style>
