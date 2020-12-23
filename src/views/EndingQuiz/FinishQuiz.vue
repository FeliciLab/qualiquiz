<template>
  <div>
    <div v-show='showLoading'>
      <loading />
    </div>

    <component
      v-show='!showLoading'
      :is="$route.meta.component"
      @finish="finish"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from '../../components/Loading.vue'

export default {
  components: { Loading },
  name: 'FinishQuiz',

  compents: {
    Loading
  },

  data () {
    return {
      showLoading: false
    }
  },

  computed: {
    ...mapGetters('quiz', {
      amountQuestions: 'getNumberOfQuestions',
      amountAnswers: 'getNumberOfAnswers',
      id: 'getId'
    }),
    ...mapGetters('authentication', {
      token: 'getToken'
    }),
    ...mapGetters('application', ['getDevelopment']),
    ...mapGetters('clock', ['timeSpent'])
  },

  methods: {
    ...mapActions('quiz', ['saveAnswers']),
    ...mapActions('feedback', ['fetchResult']),
    finish () {
      this.showLoading = true

      if (this.id === 0) {
        setTimeout(() => {
          this.$router.push({ name: 'Success' })
        }, 1000)

        return
      }

      this.saveAnswers({
        token: this.token,
        devMode: this.getDevelopment,
        timeSpent: this.timeSpent
      }).then(() => {
        this.fetchResult({ id: this.id, auth: this.token, devMode: this.getDevelopment })
          .then(() => {
            this.$router.push({ name: 'Success' })
          })
      })
    }
  }
}
</script>
