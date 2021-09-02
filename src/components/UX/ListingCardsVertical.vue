<template>
  <div class="container">
    <div v-for="(avaliacao, index) in avaliacoes" :key="index">
      <CardAvaliacoes class="card"
        :titulo="avaliacao.titulo"
        :acertos="avaliacao.acertos"
        :concluida="avaliacao.concluida"
        :dataCriacao="avaliacao.dataCriacao"
      />
    </div>
  </div>
</template>

<script>
import CardAvaliacoes from '../Home/CardAvaliacoes.vue'

export default {
  data () {
    return {
      avaliacoes: [
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date(),
          concluida: true,
          acertos: 1
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date(),
          concluida: true,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date(),
          concluida: true,
          acertos: 0
        }
      ]
    }
  },
  components: { CardAvaliacoes },
  name: 'ListingCardsVertical'
}
</script>

<style lang="scss" scoped>
.container {
  overflow-x: scroll;
  /* padding: 0px 16px 0px 16px; */
}

::-webkit-scrollbar {
  display: none;
}

.card {
  margin-bottom: 16px;
  width: 100%;
  height: 155px;
  scroll-snap-align: start;
  text-align: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039), 0px 7px 24px rgba(0, 0, 0, 0.19);
  border-radius: 16px;
}

.card:nth-child(1n) {
  background-color: $light;
  flex: 0 0 60%;
}
</style>
