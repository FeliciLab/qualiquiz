<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{'width': `${percent}%`}"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="60"
    ></div>

    <div class="position-absolute" style="width: calc(100% - 30px); text-align: center; ">
      <b-badge variant="light">
        {{ timeRest === 0 ? minuteLimit : timeRest }} min
      </b-badge>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'TimestampBar',
  data () {
    return {
      timeRest: 0,
      minuteLimit: 60,
      finishTime: moment().add('60', 'm'),
      currentIndex: 0
    }
  },
  computed: {
    percent () {
      if (this.timeRest === 0) {
        return 100
      }
      return Math.floor((this.timeRest / this.minuteLimit) * 100)
    }
  },
  mounted () {
    setInterval(() => {
      this.timeRest = this.finishTime.diff(moment(), 'minutes')
    }, 60000)
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
