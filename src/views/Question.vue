<template>
    <div class="background">
        <b-container>
            <h5 class="text-center text-uppercase">Questão {{currentIndex + 1}}/{{questionCount}}</h5>
            <b-row>
                <b-col cols=12>
                    <div class="timer"></div>
                    <div>
                        <span v-for="(question, index) in questions" :key="index">
                        </span>
                    </div>
                </b-col>
            </b-row>
            <b-row class="mx-3">
                <p>{{ questions[currentIndex].title }}</p>
            </b-row>
            <b-row>
                <b-col cols="12" md=6 class="alternatives" v-for="(alternative, index) in questions[currentIndex].alternatives" :key="index">
                    {{ alternative }}
                </b-col>
            </b-row>
            <Button class="text-center" :id="'formSubmit'" :color="'success'" :label="'Confirmar'" :icon="'icon-arrow'" />
        </b-container>
    </div>
</template>

<script>
import Button from '../components/Button'
import questions from '../assets/questions.json'
export default {
  components: {
    Button
  },
  data () {
    const currentIndex = 0
    const questionCount = questions.length
    console.log(currentIndex)
    return {
      currentIndex,
      questionCount,
      questions
    }
  }
}
</script>
