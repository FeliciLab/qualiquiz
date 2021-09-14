<template>
  <div class="container">
    <router-link
      class="bottom-navigation-action"
      :class="classObject"
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
import routerNames from '../../router/routerNames'

export default {
  itens: 'BottomNavigation',
  data () {
    return {
      itens: [
        { label: 'Início', icon: 'house-door-fill', to: routerNames.home },
        { label: 'Avaliações', icon: 'receipt', to: routerNames.quizzes }
      ],
      classObject: {
        active: true
      }
    }
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
