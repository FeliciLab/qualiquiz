<template>
  <div>
    <h1>{{ AllQuizzes }}</h1>
    <h2>{{ getUserQuizzes }}</h2>
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

<style lang="scss" scoped></style>
