<template>
  <div class="UseLandScale">
    <Map ref="childMap" />
    <StatisticalGraph ref="childStatisticalGraph" />
    <TimerShaft
      :times="['1990', '2000', '2010', '2015']"
      :currentTime="currentTime"
    />

    <div :class="['map-legend', `map-legend-${currentTimeIndex}`]">
      <p><span class="icon"></span><span class="text">&lt; 1</span></p>
      <p><span class="icon"></span><span class="text">1 - 5</span></p>
      <p><span class="icon"></span><span class="text">5 - 10</span></p>
      <p><span class="icon"></span><span class="text">10 - 20</span></p>
      <p><span class="icon"></span><span class="text">&gt; 20</span></p>
    </div>
  </div>
</template>

<script>
import TimerShaft from '@/components/TimerShaft.vue';
import Map from './Map.vue';
import StatisticalGraph from './StatisticalGraph.vue';

export default {
  name: 'UseLandScale',
  components: {
    Map,
    StatisticalGraph,
    TimerShaft,
  },
  data() {
    return {
      timer: null,
      currentTime: '1990',
      currentTimeIndex: 0,
      timeline: ['1990', '2000', '2010', '2015'],
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
      this.$refs.childStatisticalGraph.initChart({ year, index });
    },
    startTimeline() {
      let index = 1;
      this.timer = setInterval(() => {
        if (index === 4) index = 0;
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
.UseLandScale {
  height: 100%;
  position: relative;
  .map-legend {
    position: absolute;
    left: 20px;
    bottom: 40%;
    p {
      display: flex;
      line-height: 40px;
      .icon {
        width: 2px;
        height: 2px;
        margin: 19px 12px;
        border-radius: 50px;
        border-style: solid;
        border-width: 2px;
      }
      .text {
        margin-left: 10px;
      }
    }
    p:nth-child(2) .icon {
      width: 6px;
      height: 6px;
      margin: 17px 10px;
    }
    p:nth-child(3) .icon {
      width: 10px;
      height: 10px;
      margin: 15px 8px;
    }
    p:nth-child(4) .icon {
      width: 20px;
      height: 20px;
      margin: 10px 3px;
    }
    p:nth-child(5) .icon {
      width: 26px;
      height: 26px;
      margin: 7px 0;
    }
  }
  .map-legend-0 p .icon {
    border-color: #f6c044;
  }
  .map-legend-1 p .icon {
    border-color: #f3ad09;
  }
  .map-legend-2 p .icon {
    border-color: #f18b07;
  }
  .map-legend-3 p .icon {
    border-color: #f87309;
  }
  .map-legend-4 p .icon {
    border-color: #f0993c;
  }
  .map-legend-5 p .icon {
    border-color: #8df965;
  }
  .map-legend-6 p .icon {
    border-color: #d66349;
  }
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
