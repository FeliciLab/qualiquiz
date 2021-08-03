<template>
  <div class="timestamp-footer">
    <div class="icon icon-alarm" style="width: 24px; height:24px"></div>
    <div class="mx-2 roboto-bold" style="font-size:20px; mar">
      {{ onChangeTime() }}
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
    }),
    onChangeTime: function () {
      const timeLeftConverted = this.timeLeft % 60 < 10 ? `0${this.timeLeft % 60}` : this.timeLeft % 60
      if (this.timeLeft === 0) {
        return `${this.secondLimit / 60}min`
      }
      if (this.minuteLeft < 10) {
        return `0${this.minuteLeft}m${timeLeftConverted}s`
      }
      if (this.minuteLeft > 0) {
        return `${this.minuteLeft}m${timeLeftConverted}s`
      }

      return `${timeLeftConverted}s`
    }
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
    align-items: center;
    width: 100%;
  }
</style>
