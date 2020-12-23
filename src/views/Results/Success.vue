<template>
  <div class="animated fadeIn sucess-page">
    <div class="bg-green">
      <div class="flex-column-items-center">
        <Title class="title mt-50">PARABÉNS!</Title>
      </div>
      <div class="flex-column-items-center mt-45">
        <CorrectAnsweredCard />
      </div>
      <div class="flex-colum-items-center mt-100 mx-13">
        <FullWidthButton @click="showFeedback = true">
          CONFERIR RESPOSTAS
        </FullWidthButton>
      </div>
    </div>
    <div v-if="showFeedback">
      <FeedbackContent class="full-width-content" />
    </div>
  </div>
</template>

<script>
import Title from '../../components/Title'
import CorrectAnsweredCard from '../../components/Sucess/CorrectAnsweredCard'
import FullWidthButton from '../../components/UX/FullWidthButton'
import FeedbackContent from '../../components/Feedback/FeedbackContent'

export default {
  name: 'Success',

  components: {
    Title,
    CorrectAnsweredCard,
    FullWidthButton,
    FeedbackContent
  },

  data () {
    return {
      showFeedback: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .sucess-page {
    min-height: 100vh;
  }
  .title {
    color: white;
  }
  .full-width-content {
    margin-top: 80px;
  }
  .bg-green {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    background-color: $green;
  }
</style>
