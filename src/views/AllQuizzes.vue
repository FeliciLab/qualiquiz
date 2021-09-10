<template>
  <div>
    <!-- TODO: passar isso para um component -->
    <b-tabs fill justified no-nav-style content-class="teste">
      <b-tab active>
        <template #title>
          <div class="title">
            <b-icon-exclamation-triangle />
            <span>Novas</span>
          </div>
        </template>
        <p>{{ AllQuizzes }}</p>
      </b-tab>
      <b-tab title="Concluídas">
        <template #title>
          <div class="title">
            <b-icon-check-circle-fill />
            <span>Concluídas</span>
          </div>
        </template>
        <p>{{ getUserQuizzes }}</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AllQuizzes',
  computed: {
    ...mapGetters('quiz', ['getUserQuizzes'])
  }
}
</script>

<style lang="scss" scoped>
.teste {
  background-color: red;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
}
</style>
