<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-input id="inputCpf" v-model="form.cpf" type="text" placeholder="CPF" required></b-form-input>
            </b-form-group>
             <b-form-group>
                <b-form-input id="inputPhone" v-model="form.phone" type="text" placeholder="Número do Celular" required></b-form-input>
            </b-form-group>
             <b-form-group>
                <b-form-input id="inputEmail" v-model="form.mail" type="text" placeholder="Email"></b-form-input>
            </b-form-group>
            <Button class="text-center" id="formSubmit" color="success" label="Prosseguir" iconClass="icon-arrow-left" />
        </b-form>
      <Questions/>
    </div>
</template>

<style lang="scss" scoped>
  input {
    border-radius: 50px;
    font-family: 'OpenSans-Bold';
    color: #C5C2C2;
    &::-webkit-input-placeholder {
      color: #C5C2C2;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: #C5C2C2;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #C5C2C2;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #C5C2C2;
    }
  }
</style>

<script>
import Button from './Button'
import Questions from './Questions/Questions'
export default {
  components: {
    Button,
    Questions
  },
  data () {
    return {
      form: {
        cpf: '',
        phone: '',
        mail: ''
      }
    }
  }
}
</script>
