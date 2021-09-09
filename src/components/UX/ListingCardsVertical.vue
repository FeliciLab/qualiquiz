<template>
  <div class="container">
    <div v-for="(avaliacao, index) in data" :key="index">
      <CardAvaliacoes
        :id="avaliacao.id"
        :titulo="avaliacao.titulo"
        :acertos="avaliacao.acertos"
        :concluida="avaliacao.respondido"
        :dataCriacao="avaliacao.data_criacao"
      />
    </div>
  </div>
</template>

<script>
import CardAvaliacoes from '../Home/CardAvaliacoes.vue'

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: { CardAvaliacoes },
  name: 'ListingCardsVertical'
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 16px;
}
</style>
