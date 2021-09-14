<template>
  <div class="container">
    <router-link
      class="bottom-navigation-action"
      :class="item.id === selected ? 'active' : ''"
      v-for="(item, index) in this.itens"
      :key="index"
      :to="item.to"
    >
      <b-icon :icon="item.icon" />
      <span>
        {{ item.label }}
      </span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import routerNames from '../../router/routerNames'

export default {
  itens: 'BottomNavigation',
  data () {
    return {
      itens: [
        {
          id: 'home',
          label: 'Início',
          icon: 'house-door-fill',
          to: routerNames.home
        },
        {
          id: 'quizzes',
          label: 'Avaliações',
          icon: 'receipt',
          to: routerNames.quizzes
        }
      ]
    }
  },
  computed: {
    ...mapGetters('bottomNavigation', {
      selected: 'getActionSelected'
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 72px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0.5px 5px rgba(0, 0, 0, 0.039),
    0px 3.75px 11px rgba(0, 0, 0, 0.19);
}

.bottom-navigation-action {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: rgba(0, 0, 0, 0.6);

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
  }

  svg {
    margin-bottom: 4px;
    height: 18px;
    width: 18px;
  }
}

.active {
  color: $purple;
}
</style>
