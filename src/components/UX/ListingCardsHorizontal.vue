<template>
  <div class="listing-cards-horizontal">
    <div v-if="data.length > 0" class="horizontal-section">
      <div class="wrapper-card" v-for="(avaliacao, index) in data" :key="index">
        <CardAvaliacoes
          :id="avaliacao.id"
          :titulo="avaliacao.titulo"
          :acertos="Number(avaliacao.acertos)"
          :concluida="avaliacao.respondido"
          :dataCriacao="new Date(avaliacao.data_criacao)"
        />
      </div>
    </div>
    <div v-else class="not-content-wrapper mt-4 mb-4">
      <NotContentCard :message="notContentMesage" />
    </div>
  </div>
</template>

<script>
import CardAvaliacoes from '../Home/CardAvaliacoes.vue'
import NotContentCard from '../NotContentCard.vue'

export default {
  name: 'ListingCardsHorizontal',
  components: { CardAvaliacoes, NotContentCard },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    notContentMesage: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.listing-cards-horizontal {
  display: flex;
  width: 100%;
}

.horizontal-section {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  width: 100%;
  grid-auto-flow: column;
  gap: 12px;
  padding: 16px 16px 30px;
  scroll-padding-left: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.wrapper-card {
  scroll-snap-align: start;
  width: 220px;
  flex-shrink: 0;
}

.not-content-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
}
</style>
