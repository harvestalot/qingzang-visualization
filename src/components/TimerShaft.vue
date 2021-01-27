<template>
  <div class="TimerShaft">
    <div class="TimerShaft-container">
      <div class="TimerShaft-container-item">
        <div class="TimerShaft-container-item-empty"></div>
        <div :class="['TimerShaft-container-item-dot', {'active': currentTime === startTime}]">
          <span>{{ startTime }}</span>
        </div>
        <div class="TimerShaft-container-item-line"></div>
      </div>
      <template v-for="time in mmergeTimes">
        <div
          :key="time"
          class="TimerShaft-container-item"
        >
          <div :class="['TimerShaft-container-item-line',
          {'dashes': time > dashesStartTime}]"></div>
          <div :class="['TimerShaft-container-item-dot', {'active': currentTime === time}]">
            <span>{{ time }}</span>
          </div>
          <div :class="['TimerShaft-container-item-line',
          {'dashes': time >= dashesStartTime}]"></div>
        </div>
      </template>
      <div class="TimerShaft-container-item">
        <div class="TimerShaft-container-item-line dashes"></div>
        <div :class="['TimerShaft-container-item-dot', {'active': currentTime === endTime}]">
          <span>{{ endTime }}</span>
        </div>
        <div class="TimerShaft-container-item-empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerShaft',
  props: {
    times: {
      type: Array,
      default: () => [],
    },
    futureTimes: {
      type: Array,
      default: () => [],
    },
    currentTime: {
      type: Number | String,
      default: () => '',
    },
  },
  data() {
    return {
      // currentTime: this.times[0],
      allTimes: this.times.concat(this.futureTimes),
      startTime: '',
      endTime: '',
      dashesStartTime: this.times[this.times.length - 1],
    };
  },
  computed: {
    mmergeTimes() {
      const { times, futureTimes } = this.$props;
      this.startTime = times.shift();
      this.endTime = futureTimes.pop();
      return times.concat(futureTimes);
    },
  },
  mounted() {
    // let index = 1;
    // setInterval(() => {
    //   if (index === this.allTimes.length) index = 0;
    //   this.currentTime = this.allTimes[index];
    //   index += 1;
    // }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.TimerShaft {
  width: 100%;
  height: 60px;
  padding: 10px 10px;
  &-container {
    display: flex;
    &-item {
      flex: 1;
      display: flex;
      &-dot {
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        background: #007aff;
        margin: auto;
        margin-bottom: -8px;
        cursor: pointer;
        span {
          position: absolute;
          left: -7px;
          bottom: -25px;
        }
        &.active {
          background-color: #ffe401;
          span {
            color: #ffe401;
          }
        }
      }
      &-line {
        flex: 1;
        border-bottom: 2px solid #666;
        &.dashes {
          border-bottom: 2px dashed #ddd;
        }
      }
      &-empty {
        flex: 1;
      }
    }
  }
}
</style>
