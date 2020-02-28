<template>
  <div>
    <div
      v-for="(index) in amountQuestions"
      :key="index"
      class="m-2 number-question"
      :class="{'number-question-active': currentIndex == index }"
    >
      <p class="text-center ">
        {{index + 1}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BubbleQuestions',
  computed: {
    ...mapState('questions', {
      currentIndex: 'current'
    }),
    ...mapGetters('questions', {
      amountQuestions: 'amountQuestions'
    })
  }
}
</script>

<style scoped>

</style>
