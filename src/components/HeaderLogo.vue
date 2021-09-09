<template>
  <div>
    <div class="header-logo">
      <div></div>
      <div id="div-sobre">
        <button id="buttonSobre" @click="openModal">
          <img id="logoSobre" src="@/assets/icons/sobre.svg" />
        </button>
      </div>
      <SobreModal v-model="modalOpen"></SobreModal>
      <img id="logo" src="@/assets/images/qualiquiz-white.svg" />
      <img
        id="logo-description"
        src="../assets/images/qualiquiz-description.svg"
      />
    </div>
  </div>
</template>
<script>
import SobreModal from './UX/SobreModal.vue'
export default {
  components: { SobreModal },
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal () {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>
<style lang="scss" scoped>
.header-logo {
  position: relative;
  height: 118px;
}
#div-sobre {
  display: flex;
  justify-content: flex-end;
  width: 95%;
}
#logoSobre {
  width: 20px;
  height: 20px;
}
#buttonSobre {
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: #61459b;
  border: none;
  padding: 0px !important;
  line-height: unset !important;
}
#logo {
  width: 203px;
  height: 40px;
  left: 86px;
  top: 28px;
}

#logo-description {
  width: 202px;
  height: 10px;
  left: 87px;
  top: 74px;
  margin-top: 6px;
}
</style>
