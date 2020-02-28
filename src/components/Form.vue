<template>
  <div>
    <b-form>
      <b-form-group :class="{ 'form-group--error': $v.form.cpf.$error }">
        <b-form-input
          id="inputCpf"
          v-mask="'###.###.###-##'"
          v-model.trim="$v.form.cpf.$model"
          type="text"
          placeholder="CPF"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="inputPhone"
          v-model.trim="$v.form.phone.$model"
          type="text"
          placeholder="Número do Celular"
          v-mask="'(##) # ####-####'"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="inputEmail"
          v-model.trim="$v.form.mail.$model"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-form-group>
      <Button
        @click="storeStudent()"
        class="text-center"
        color="success"
        label="Prosseguir"
        iconClass="icon-arrow-right"
      />
    </b-form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
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
  validations: {
    form: {
      cpf: {
        required,
        minLength: minLength(11)
      },
      mail: {
        required,
        email
      },
      phone: {
        required
      }
    },
    validationGroup: ['form.cpf', 'form.mail', 'form.phone']
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
      this.$router.push({ name: 'Welcome' })
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
