<template>
  <div class="timestamp-footer">
    <div class="icon icon-alarm" style="width: 24px; height:24px"></div>
    <div class="roboto-bold" style="font-size:20px; mar">
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
      if (this.timeLeft === 0) {
        return `${this.secondLimit / 60}min`
      }
      if (this.minuteLeft < 10) {
        return `0${this.minuteLeft}min ${this.timeLeft % 60}s`
      }
      if (this.minuteLeft > 0) {
        return `${this.minuteLeft}min ${this.timeLeft % 60}s`
      }

      return `${this.timeLeft}s`
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
    justify-content: space-evenly;
    align-items: center;
    width: 120px;
  }
</style>
