<template>
  <div class="timestamp-footer">
    <div class="icon icon-alarm" style="width: 24px; height:24px"></div>
    <div class="roboto-bold" style="font-size:20px; mar">
      {{ timeLeft === 0 ? `${secondLimit / 60}min` : minuteLeft > 0 ? `${minuteLeft}min ${timeLeft % 60}s` : `${timeLeft}s` }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TimestampFooter',

  data () {
    return {
      interval: ''
    }
  },
  computed: {
    ...mapGetters('clock', {
      finishTime: 'finishTime',
      percent: 'percent',
      timeLeft: 'timeLeft',
      minuteLeft: 'minuteLeft',
      secondLimit: 'secondLimit',
      timeSpent: 'timeSpent'
    })
  },
  destroyed () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.timeLeft > moment(this.finishTime).diff(moment(), 'seconds')) {
        this.setTimeLeft(moment(this.finishTime).diff(moment(), 'seconds'))
      }

      if (this.timeLeft <= 0) {
        this.$router.push('/timeout')
      }
    }, 1000)
  },
  methods: {
    ...mapActions('clock', {
      setFinishTime: 'setFinishTime',
      setTimeLeft: 'setTimeLeft'
    })
  }
}
</script>

<style
  lang="scss"
  scoped
>
  .timestamp-footer {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 120px;
  }
</style>
