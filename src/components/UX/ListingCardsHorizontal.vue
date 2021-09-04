<template>
  <div class="container">
    <div v-for="(avaliacao, index) in avaliacoes" :key="index">
      <div class="wrapper-card">
        <CardAvaliacoes
          :titulo="avaliacao.titulo"
          :acertos="avaliacao.acertos"
          :concluida="avaliacao.concluida"
          :dataCriacao="avaliacao.dataCriacao"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardAvaliacoes from '../Home/CardAvaliacoes.vue'

export default {
  components: { CardAvaliacoes },
  data () {
    return {
      avaliacoes: [
        {
          titulo: 'Outro tipo de nome maior',
          dataCriacao: new Date().toLocaleDateString(),
          concluida: false,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date().toLocaleDateString(),
          concluida: false,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date().toLocaleDateString(),
          concluida: false,
          acertos: 0
        }
      ]
    }
  },
  name: 'ListingCardsHorizontal'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: stretch;
  overflow-x: scroll;
  padding: 16px 16px 30px;
}

::-webkit-scrollbar {
  display: none;
}

.wrapper-card {
  margin-right: 12px;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
}
</style>
