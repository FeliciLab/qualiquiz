<template>
  <div class="animated fadeIn py-3 background">
    <b-container>
      <Header
        dark
        title="Acesso"
      />
      <b-row align-h="center">
        <b-col cols=12 class="d-flex justify-content-center">
          <b-img
          fluid
          :src="blank"
          ></b-img>
        </b-col>
        <b-col class="form-wrapper" cols=12>
          <Form/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
  .form-wrapper {
    max-width: 400px;
  }
</style>
<script>
import Header from '../components/Header'
import Form from '../components/Form'

export default {
  components: {
    Form,
    Header
  },
  data () {
    return {
      blank: require('../assets/images/blank.png')
    }
  }
}
</script>
