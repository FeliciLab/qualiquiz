<template>
  <div class="progresso-acerto">
    <div id="texto-acertos">ACERTOS: {{acertos}}/{{totalQuestoes}}</div>
    <div
      id="acerto"
      :style="{'width': `${widthAcerto}%`}"
    >
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressoAcertos',
  data () {
    return {
      widthAcerto: this.acertos * (100 / this.totalQuestoes)
    }
  },
  props: {
    acertos: {
      required: true,
      type: Number
    },
    totalQuestoes: {
      required: true,
      type: Number
    }
  }
}
</script>
<style lang="scss" scoped>
  .progresso-acerto {
    background-color: #E93359;
    border-radius: 16px;
    height: 24px;
    width: 100%;
    margin-bottom: 8px;
    position: relative;
  }
  #acerto{
    height: 24px;
    background-color: #219653;
    border-radius: 16px;
    z-index: 5;
  }
  #texto-acertos{
    font-size: 12px;
    color: $light;
    display: flex;
    align-items: center;
    z-index: 10;
    position: absolute;
    height: 24px;
    padding: 0 18px;
  }
</style>
