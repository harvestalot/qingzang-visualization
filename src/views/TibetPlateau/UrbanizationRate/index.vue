<template>
  <div class="UrbanizationRate">
    <Map ref="childMap" />
    <TimerShaft
      :times="['1990', '2000', '2010']"
      :currentTime="currentTime"
    />
  </div>
</template>

<script>
import TimerShaft from '@/components/TimerShaft.vue';
import Map from './Map.vue';

export default {
  name: 'UrbanizationRate',
  components: {
    Map,
    TimerShaft,
  },
  data() {
    return {
      timer: null,
      currentTime: '1990',
      currentTimeIndex: 0,
      timeline: ['1990', '2000', '2010'],
    };
  },
  watch: {
    currentTime: {
      immediate: true,
      handler(year) {
        this.$nextTick(() => {
          this.init(year);
        });
      },
    },
  },
  mounted() {
    this.startTimeline();
  },
  methods: {
    init(year) {
      const index = this.timeline.indexOf(year);
      this.currentTimeIndex = index;
      this.$refs.childMap.initChart({ year, index });
    },
    startTimeline() {
      let index = 1;
      this.timer = setInterval(() => {
        if (index === 3) index = 0;
        this.currentTime = this.timeline[index];
        index += 1;
      }, 5000);
    },
    destroyed() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style lang="scss" scoped>
.UrbanizationRate {
  height: 100%;
  position: relative;
  .StatisticalGraph {
    position: absolute;
    padding: 0 20px;
    bottom: 70px;
  }
  .TimerShaft {
    position: absolute;
    bottom: 10px;
  }
}
</style>
