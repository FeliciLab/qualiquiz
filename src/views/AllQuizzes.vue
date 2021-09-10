<template>
  <div>
    <!-- TODO: passar isso para um component -->
    <b-tabs fill justified no-nav-style nav-wrapper-class="teste">
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

<style lang="scss">
.teste {
  background-color: $purple;
  box-shadow: 0px 0.5px 1.75px rgba(0, 0, 0, 0.039),
    0px 1.85px 6.25px rgba(0, 0, 0, 0.19);
  border-radius: 0px 0px 16px 16px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
}
</style>
