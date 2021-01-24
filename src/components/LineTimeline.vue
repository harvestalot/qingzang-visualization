<template>
  <div
    ref="echartsContainer"
    class="w_h_100 LineTimeline"
  ></div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';

require('echarts/lib/component/timeline');

export default {
  name: 'LineTimeline',
  props: {
    year: {
      type: Number,
      required: true,
    },
    legend: {
      type: Array,
      default: () => [],
    },
    axisData: {
      type: Array,
      default: () => [],
    },
    seriesData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      echartsView: null,
      option: null,
      playInterval: 3000,
    };
  },
  watch: {
    year: {
      // immediate: true,
      handler() {
        this.$nextTick(() => {
          if (this.echartsView) {
            this.setChartOptions();
          } else {
            this.initChart();
          }
        });
      },
    },
  },
  mounted() {},
  methods: {
    initChart() {
      this.echartsView = $echartsOptions.echarts.init(
        this.$refs.echartsContainer
      );
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      if (this.echartsView) this.echartsView.clear();
      const { legend, axisData } = this.$props;
      const { playInterval } = this;
      this.option = {
        baseOption: {
          color: $echartsOptions.color,
          tooltip: $echartsOptions.tooltip,
          grid: {
            ...$echartsOptions.grid,
            left: 20,
          },
          legend: {
            ...$echartsOptions.legend,
            data: legend,
          },
          xAxis: {
            ...$echartsOptions.axis,
            show: false,
            boundaryGap: false,
            type: 'category',
            data: axisData,
          },
          yAxis: legend.map((name, index) => ({
            ...$echartsOptions.axis,
            type: 'value',
            name,
            max: 0.8,
            interval: 0.2,
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: index ? '#49F30A' : '#EA9F04',
              },
            },
          })),
          timeline: {
            left: 5,
            right: 20,
            bottom: -14,
            axisType: 'category',
            autoPlay: true,
            playInterval,
            controlStyle: {
              showNextBtn: false,
              showPrevBtn: false,
            },
            data: this.$store.state.years,
            lineStyle: {
              color: '#666',
            },
            checkpointStyle: {
              symbolSize: 16,
              color: '#FFE401',
            },
            label: {
              color: '#fff',
              lineHeight: 30,
              formatter(s) {
                return new Date(s).getFullYear();
              },
            },
          },
        },
        options: [],
      };

      this.echartsView.setOption(this.option, true);
      this.echartsView.on('timelinechanged', (params) => {
        this.$store.commit('setCurrentYear', axisData[params.currentIndex]);
      });
    },
    setChartOptions() {
      const { legend, seriesData } = this.$props;
      this.option.options.push({
        series: legend.map((name, index) => ({
          name,
          yAxisIndex: index,
          type: 'line',
          label: {
            normal: {
              show: true,
              fontSize: 12,
              color: '#fff',
              offset: [20, index ? 0 : 20],
              position: 'top',
              formatter: '{c}',
            },
          },
          data: seriesData[index],
        })),
      });
      this.echartsView.setOption(this.option);
    },
  },
  destroyed() {
    this.echartsView.dispose();
    this.echartsView = null;
    this.option = null;
    this.$store.commit('setCurrentYear', 2000);
  },
};
</script>

<style lang="scss" scoped>
.LineTimeline {
}
</style>
