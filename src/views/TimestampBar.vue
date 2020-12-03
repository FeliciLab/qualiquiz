<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{'width': `${percent}%`}"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="10"
    ></div>

    <div class="position-absolute" style="width: calc(100% - 30px); text-align: center; ">
      <b-badge variant="light">
        {{ timeLeft === 0 ? minuteLimit : timeLeft }} min
      </b-badge>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TimestampBar',
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
      minuteLimit: 'minuteLimit'
    })
  },
  destroyed () {
    clearInterval(this.interval)
  },
  mounted () {
    if (this.finishTime === false) {
      this.setFinishTime(moment().add(this.minuteLimit, 'm'))
      this.setTimeLeft(this.minuteLimit)
    }

    this.interval = setInterval(() => {
      if (this.timeLeft > moment(this.finishTime).diff(moment(), 'minutes')) {
        this.setTimeLeft(moment(this.finishTime).diff(moment(), 'minutes'))
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
  .t-9 {
    top: 9%;
  }
  .l-50 {
    left: 50%;
  }
  .progress {
    height: 24px;
    border: 2px solid $burning-orange;
    border-radius: 12px;
    background-color: white;
    color: black;
  }

  .progress-bar {
    background: linear-gradient(90deg, $light-orange 0%, $burning-orange 100%);
    border-radius: 12px;
    color: white;
  }
</style>
