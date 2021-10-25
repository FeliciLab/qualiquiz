<template>
  <div class="card-avaliacao">
    <span class="titulo-avaliacao roboto-bold">
      {{ titulo }}
    </span>
    <h4 class="data-criacao">{{ dataCriacaoFormated }}</h4>
    <progresso-acertos
      class="barra-progresso"
      v-if="concluida"
      :acertos="acertos"
      :totalQuestoes="totalQuestoes"
    />
    <div class="wrapper-button">
      <button @click="handleClickButton">
        Revisar
      </button>
      <!-- <NakedButton
        :label="labelBotao"
        color="#61459B"
        bgColor="#FFFFFF"
        @click="handleClickButton"
      /> -->
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { format } from 'date-fns'
// import NakedButton from '../UX/NakedButton.vue'
import ProgressoAcertos from './ProgressoAcertos.vue'
import routerNames from '../../router/routerNames'
export default {
  name: 'CardAvaliacoes',
  data () {
    return {
      labelBotao: this.concluida ? 'REVISAR' : 'INICIAR',
      dataCriacaoFormated: format(this.dataCriacao, 'P')
    }
  },
  methods: {
    ...mapActions('quiz', ['setCurrentQuizId', 'cleanQuiz']),
    handleClickButton () {
      this.setCurrentQuizId(this.id)
      if (this.concluida) {
        this.$router.push(routerNames.success)
      } else {
        this.cleanQuiz()
        this.$router.push(routerNames.quiz)
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
    },
    totalQuestoes: {
      required: true,
      type: Number
    }
  },
  components: {
    // NakedButton,
    ProgressoAcertos
  }
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
  margin-bottom: 16px;
}

.titulo-avaliacao {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-bottom: 8px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
