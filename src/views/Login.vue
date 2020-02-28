<template>
    <div class="py-3 background">
      <b-container>
        <Header dark title="Acesso"/>
        <div class="d-flex justify-content-center">
          <b-img fluid :src="blank"></b-img>
        </div>
        <div class="px-5">
          <Form />
        </div>
      </b-container>
    </div>
</template>
<script>
import Header from '../components/Header'
import Form from '../components/Form'
export default {
  components: {
    Form, Header
  },
  data () {
    return {
      blank: require('../assets/images/blank.png')
    }
  }
}
</script>
