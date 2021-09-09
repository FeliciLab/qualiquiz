<template>
  <div class="container">
    <div v-if="data.length > 0">
      <div v-for="(avaliacao, index) in data" :key="index">
        <div class="wrapper-card">
          <CardAvaliacoes
            :id="avaliacao.id"
            :titulo="avaliacao.titulo"
            :acertos="avaliacao.acertos"
            :concluida="avaliacao.respondido"
            :dataCriacao="avaliacao.data_criacao"
          />
        </div>
      </div>
    </div>
    <div v-else class="not-content-wrapper">
      <NotContentCard
        message="Você ainda não possui novas avaliações.
Aguarde que logo estará disponível!"
      />
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

.not-content-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
}
</style>
