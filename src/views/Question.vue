<template>
  <div>
    <b-container>
      <Header
        dark
        :title="`Questão ${currentIndex + 1} / ${amountQuestions}`"
      />
      <b-row>
        <b-col cols=12>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{'width': percent}"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="60"
            ></div>
            <p
              class="position-absolute timer"
              style="left: 50%;"
            >{{ timeRest }}</p>
          </div>
          <BreadcrumbsQuestions/>
        </b-col>
      </b-row>
      <Questions/>
    </b-container>
  </div>
</template>

<script>
// percent = 10*m/6
import { mapGetters } from 'vuex'
import moment from 'moment'
import Header from '../components/Header'
import Questions from '../components/Questions/Questions'
import BreadcrumbsQuestions from '../components/BreadcrumbsQuestions'

export default {
  components: {
    Header,
    Questions,
    BreadcrumbsQuestions
  },
  data () {
    const percent = '55%'
    const currentIndex = 0
    const finishTime = moment().add('60', 'm')
    const timeRest = 0
    return {
      timeRest,
      finishTime,
      percent,
      currentIndex
    }
  },
  methods: {
    getRestTime () {
      setInterval(() => {
        this.timeRest = this.finishTime.diff(moment(), 'minutes')
      }, 1000)
    }
  },
  computed: {
    ...mapGetters('questions', {
      amountQuestions: 'amountQuestions'
    })
  },
  mounted () {
    this.getRestTime()
  }
}
</script>
<style
  lang="scss"
  scoped
>
  .progress {
    height: 24px;
    border: 2px solid $burning-orange;
    border-radius: 12px;
    background-color: white;
  }

  .progress-bar {
    background: linear-gradient(90deg, $light-orange 0%, $burning-orange 100%);
    border-radius: 12px;
  }

  .timer {
    color: #8F8F8F;
  }
</style>
