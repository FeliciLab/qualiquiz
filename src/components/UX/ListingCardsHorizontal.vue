<template>
  <div class="container">
    <div v-for="(avaliacao, index) in data" :key="index">
      <div class="wrapper-card">
        <CardAvaliacoes
          :titulo="avaliacao.titulo"
          :acertos="avaliacao.acertos"
          :concluida="avaliacao.respondido"
          :dataCriacao="avaliacao.data_criacao"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardAvaliacoes from '../Home/CardAvaliacoes.vue'

export default {
  name: 'ListingCardsHorizontal',
  components: { CardAvaliacoes },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  }
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
