<template>
  <div class="card-avaliacao">
    <div class="titulo-avaliacao roboto-bold">{{ titulo }}</div>
    <h4 class="data-criacao">{{ dataCriacao }}</h4>
    <progresso-acertos
      class="barra-progresso"
      v-if="concluida"
      :acertos="acertos"
    />
    <div class="wrapper-button">
      <NakedButton
        :label="labelBotao"
        color="#61459B"
        bgColor="#FFFFFF"
        @click="handleClickButton"
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
  methods: {
    handleClickButton () {
      if (this.concluida) {
        console.log(this.id)
        this.$router.push('/success')
      } else {
        console.log(this.id)
        this.$router.push('/success')
      }
    }
  },
  props: {
    id: {
      required: true,
      type: Number
    },
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
  height: 100%;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
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
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
}
</style>
