<template>
  <div class="bottom-navigation-container">
    <BottomNavigation class="bottom-navigation" />
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BottomNavigation from '../UX/BottomNavigation'
export default {
  name: 'BottomNavigationContainer',
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  components: { BottomNavigation },
  methods: {
    ...mapActions('bottomNavigation', ['setActionSelected'])
  },
  mounted () {
    this.setActionSelected(this.selected)
  }
}
</script>

<style lang="scss" scoped>
.bottom-navigation-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.bottom-navigation {
  position: fixed;
  bottom: 0;
  z-index: 9999;
}

.wrapper {
  overflow-y: auto;
  padding-bottom: 72px;
}
</style>
