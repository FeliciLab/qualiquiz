<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions('application', ['setAppMocked'])
  },
  computed: {
    ...mapGetters('authentication', ['getToken'])
  },
  mounted () {
    this.setAppMocked(false)
    this.$router.push(`/dev/isus/login/${this.getToken}`)
  }
}
</script>
