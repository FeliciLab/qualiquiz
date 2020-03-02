<template>
  <div>
    <b-form>
      <b-form-invalid-feedback v-if="!$v.form.mail.email">
        O dado informado não corresponde a um email
      </b-form-invalid-feedback>
      <b-form-group :class="{ 'form-group--error': $v.form.cpf.$error }">
        <b-form-input
          id="inputCpf"
          v-mask="'###.###.###-##'"
          v-model.trim="$v.form.cpf.$model"
          :state="!$v.form.cpf.$anyDirty || !$v.form.cpf.$anyError"
          type="text"
          placeholder="CPF"
          required
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.cpf.required">
          Campo Obrigatório
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.cpf.cpf">
          CPF informado não é válido
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.cpf.minLength">
          Este campo precisa de no mínimo {{$v.form.cpf.$params.minLength.min}} caracteres.
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="inputPhone"
          v-model.trim="$v.form.phone.$model"
          type="text"
          :state="!$v.form.phone.$anyDirty || !$v.form.phone.$anyError"
          placeholder="Número do Celular"
          v-mask="'(##) # ####-####'"
          required
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.phone.required">
          Campo Obrigatório
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="inputEmail"
          v-model.trim="$v.form.mail.$model"
          :state="!$v.form.mail.$anyDirty || !$v.form.mail.$anyError"
          type="email"
          placeholder="Email"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.mail.email">
          O dado informado não corresponde a um email
        </b-form-invalid-feedback>
      </b-form-group>
      <Button
        @click="handleForm()"
        class="text-center"
        color="success"
        label="Prosseguir"
        iconClass="icon-arrow-right"
      />
    </b-form>
  </div>
</template>

<script>
import cpf from '../helpers/cpfValidator'
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
        minLength: minLength(11),
        cpf
      },
      mail: {
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
    handleForm () {
      if (this.validateFields()) {
        this.storeStudent()
        return true
      }
      return false
    },
    validateFields () {
      return (!this.$v.form.cpf.$invalid && !this.$v.form.phone.$invalid && !this.$v.form.mail.$invalid)
    },
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
