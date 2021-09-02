<template>
<div class="container">
  <div class="cards">
  </div>
  <div class="cards">
  </div>
  <div class="cards">
  </div>
  <div class="cards">
  </div>
  <div class="cards">
  </div>
</div>
</template>

<script>

export default {
  name: 'ListingCardsVertical'
}
</script>

<style lang="scss" scoped>
.container {
  overflow-x: scroll;
  padding: 0px 16px 0px 16px;
}

::-webkit-scrollbar {
    display: none;
}

.cards {
  margin-bottom: 16px;
  width: 100%;
  height: 155px;
  scroll-snap-align: start;
  text-align: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039), 0px 7px 24px rgba(0, 0, 0, 0.19);
  border-radius: 16px;
}

.cards:nth-child(1n) {
  background-color: $light;
  flex: 0 0 60%;
}
</style>
