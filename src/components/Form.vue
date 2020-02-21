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
            <Button :id="'formSubmit'" :color="'success'" :label="'Entrar'" :icon="'icon-arrow'" />
        </b-form>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Button from './Button'
export default {
  components: {
    Button
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
