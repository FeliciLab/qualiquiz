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
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date(),
          concluida: false,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date(),
          concluida: false,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date(),
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
  align-items: center;
  overflow-x: scroll;
  padding: 16px;
  overflow-y: inherit;
}

::-webkit-scrollbar {
  display: none;
}

.wrapper-card {
  margin-right: 12px;
  scroll-snap-align: start;
  display: flex;
}

.cards:nth-child(1n) {
  background-color: $light;
  flex: 0 0 60%;
}
</style>
