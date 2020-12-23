<template>
  <div class="questions-explanations mt-18">
    <div
      v-for="(item, index) in explanations"
      :key="index"
      :id="`explanation-question-${item.questao}`"
    >
      <p>
        <strong>Question: {{ item.questao }}</strong> <br>
        <span> Opção correta: {{ getCharacter(item.questao) }} </span>
      </p>
      <p class="text-description" v-html="item.descricao"></p>
      <p class="text-right">
        <a class="back-top" href="#top-explanation">
          VOLTAR AO TOPO
        </a>
      </p>
      <hr v-if="(index + 1) < explanations.length" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QuestionsExplanations',

  computed: {
    ...mapGetters('feedback', {
      explanations: 'getExplanations',
      answersAlternative: 'getAnswersAlternative'
    }),
    characterAlternative () {
      return {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E'
      }
    }
  },

  methods: {
    getCharacter (questao) {
      return this.characterAlternative[
        this.answersAlternative[questao]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.questions-explanations {
  padding: 13px;
  font-size: 16px;
  line-height: 24px;
}
.text-description {
  overflow-wrap: break-word;
}
.back-top {
  color: $orange;
  font-weight: bold;
}
a, a:active, a:hover, a:visited {
  color: $orange;
}
</style>
