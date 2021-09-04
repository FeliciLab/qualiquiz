<template>
  <div class="container">
    <div v-for="(avaliacao, index) in avaliacoes" :key="index">
      <CardAvaliacoes
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
          dataCriacao: new Date().toLocaleDateString(),
          concluida: true,
          acertos: 1
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date().toLocaleDateString(),
          concluida: true,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date().toLocaleDateString(),
          concluida: true,
          acertos: 0
        },
        {
          titulo: 'Manejo Covid -19',
          dataCriacao: new Date().toLocaleDateString(),
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
  display: grid;
  gap: 16px;
}
</style>
