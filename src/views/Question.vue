<template>
    <div>
        <b-container>
            <h5 class="text-center text-uppercase">Questão {{currentIndex + 1}}/{{questionCount}}</h5>
            <b-row>
                <b-col cols=12>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{'width': percent}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="60"></div>
                        <p class="position-absolute timer" style="left: 50%;">{{ timeRest }}</p>
                    </div>
                    <div>
                        <div v-for="(question, index) in questions" :key="index" class="m-2 number-question" :class="{'number-question-active': currentIndex == index }">
                            <p class="text-center " >
                                {{index + 1}}
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="mx-3">
                <p>{{ questions[currentIndex].title }}</p>
            </b-row>
            <b-row class="mx-3">
                <b-col cols="12" md=6 class="alternatives" v-for="(alternative, index) in questions[currentIndex].alternatives" :key="index">
                    <button class="alternative my-2">
                        <b-row class="py-2">
                            <b-col cols=2 class="character">
                                {{ alternative.character }}
                            </b-col>
                            <b-col cols=10>
                                {{ alternative.answer }}
                            </b-col>
                        </b-row>
                    </button>
                </b-col>
            </b-row>
            <Button class="text-center py-3" :id="'formSubmit'" :color="'success'" :label="'Confirmar'" :icon="'icon-arrow'" />
        </b-container>
    </div>
</template>

<style lang="scss" scoped>
    .progress {
        height: 24px;
        border: 2px solid  $burning-orange;
        border-radius: 12px;
        background-color: white;
    }
    .progress-bar {
        background: linear-gradient(90deg, #FDA720 0%, $burning-orange 100%);
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
        background: linear-gradient(90deg, #FDA720 0%, $burning-orange 100%);
        border: 2px solid $burning-orange;
        color: white;
    }
</style>

<script>
// percent = 10*m/6
import moment from 'moment'
import Button from '../components/Button'
import questions from '../assets/questions.json'
export default {
  components: {
    Button
  },
  data () {
    const percent = '55%'
    const currentIndex = 0
    const questionCount = questions.length
    const finishTime = moment().add('60', 'm')
    const timeRest = 0
    return {
      timeRest,
      finishTime,
      percent,
      currentIndex,
      questionCount,
      questions
    }
  },
  methods: {
    getRestTime () {
      setInterval(() => {
        this.timeRest = this.finishTime.diff(moment(), 'minutes')
      }, 1000)
    }
  },
  mounted () {
    this.getRestTime()
  }
}
</script>
