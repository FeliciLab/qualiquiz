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
        </b-col>
      </b-row>
      <BubbleQuestions/>
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
import BubbleQuestions from '../components/BubbleQuestions'

export default {
  components: {
    Header,
    Questions,
    BubbleQuestions
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

  .character {
    font-family: OpenSans-Bold;
    font-size: 2.5rem;
  }

  .alternative {
    cursor: pointer;
    transition: all .2s ease-out;
    background: none;
    box-shadow: 0 0 0 transparent;
    border: 1px solid $white-smoke;
    text-shadow: 0 0 0 transparent;
    border-radius: 6px;

    &:hover {
      background: none;
      color: #4c4c4c;
    }

    &:focus {
      outline: none;
      color: $forest-green !important;
      border: 1px solid $forest-green;
      border-radius: 6px;
    }
  }

  .number-question {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: $white-smoke;
    font-family: OpenSans-Bold;
    font-size: 12px;
  }

  .number-question-active {
    background: linear-gradient(90deg, $light-orange 0%, $burning-orange 100%);
    border: 2px solid $burning-orange;
    color: white;
  }
</style>
