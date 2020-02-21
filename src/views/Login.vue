<template>
    <div class="py-3">
        <h5 class="text-center text-uppercase">Acesso</h5>
          <div class="d-flex justify-content-center">
            <b-img fluid :src="blank"></b-img>
          </div>
          <div class="px-5">
            <Form />
          </div>
    </div>
</template>
<script>
import Form from '../components/Form'
export default {
  components: {
    Form
  },
  data () {
    return {
      blank: require('../assets/images/blank.png')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
