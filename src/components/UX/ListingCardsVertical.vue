<template>
  <div class="container">
    <div v-if="data.length > 0">
      <div v-for="(avaliacao, index) in data" :key="index">
        <CardAvaliacoes
          :id="avaliacao.id"
          :titulo="avaliacao.titulo"
          :acertos="Number(avaliacao.acertos)"
          :concluida="avaliacao.respondido"
          :dataCriacao="new Date(avaliacao.data_criacao)"
        />
      </div>
    </div>
    <div v-else class="not-content-wrapper">
      <NotContentCard
        message="Você ainda não possui avaliações concluídas.
Responda a sua prmeira avaliação!"
      />
    </div>
  </div>
</template>

<script>
import CardAvaliacoes from '../Home/CardAvaliacoes.vue'
import NotContentCard from '../NotContentCard.vue'

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: { CardAvaliacoes, NotContentCard },
  name: 'ListingCardsVertical'
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 16px;
}
</style>
