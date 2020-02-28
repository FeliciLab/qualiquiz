<template>
  <div class="d-flex justify-content-center">
    <div
      v-for="(index) in amountQuestions"
      :key="index"
      class="m-2 number-question d-flex align-items-center justify-content-center"
      :class="{ 'number-question-active': currentIndex === index }"
    >
      <span>
        {{ index }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BreadcrumbsQuestions',
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

<style
  lang="scss"
  scoped
>
  .number-question {
    border-radius: 100%;
    width: 24px;
    height: 24px;
    background-color: $white-smoke;
    font-family: OpenSans-Bold;
    font-size: 12px;
  }

  .number-question-active {
    background: linear-gradient(90deg, $light-orange 0%, $burning-orange 100%);
    border: 1px solid $burning-orange;
    color: white;
  }
</style>
