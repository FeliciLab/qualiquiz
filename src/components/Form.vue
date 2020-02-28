<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input
          id="inputCpf"
          v-mask="'###.###.###-##'"
          v-model="form.cpf"
          type="text"
          placeholder="CPF"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="inputPhone"
          v-model="form.phone"
          type="text"
          placeholder="Número do Celular"
          v-mask="'(##) # ####-####'"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="inputEmail"
          v-model="form.mail"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-form-group>
      <Button
        @click="storeStudent"
        class="text-center"
        id="formSubmit"
        color="success"
        label="Prosseguir"
        iconClass="icon-arrow-left"
      />
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions('student', {
      setStudent: 'setStudent'
    }),
    storeStudent () {
      this.setStudent(
        {
          firstname: 'Devlab',
          lastname: 'Felicilab',
          email: this.form.mail,
          phone: this.form.phone,
          cpf: this.form.cpf
        }
      )
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
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
