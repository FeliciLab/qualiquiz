<template>
  <div class="breadcrumbs-questions">
    <div class="breadcrumbs-questions">
      <div
      v-for="n in amountAnswers"
      :key="n"
      class="breadcrumbs-item"
      >{{ }} </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BreadcrumbsFixed',
  props: {
    amountAnswers: Number
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .breadcrumbs-questions {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 24px 8px 0 8px;
    width: 100%;
    padding: 0px;
  }
  .breadcrumbs-item {
    border-radius: 16px;
    width: 20%;
    height: 12px;
    background-color: $gray5;
    margin: 0px 8px;
    background-color: $purple;
    padding: 0px;
  }
</style>
