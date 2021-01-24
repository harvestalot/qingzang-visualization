<template>
  <div
    ref="PictorialBarGraph"
    class="w_h_100 PictorialBar"
  ></div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';

export default {
  name: 'PictorialBar',
  props: {
    year: {
      type: Number,
      required: true,
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
        this.$refs.PictorialBarGraph
      );
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      const option = {
        color: $echartsOptions.color,
        tooltip: $echartsOptions.tooltip,
        grid: $echartsOptions.grid,
        title: {
          ...$echartsOptions.title,
          text: this.$attrs.title,
        },
        legend: {
          ...$echartsOptions.legend,
          data: [],
        },
        xAxis: {
          ...$echartsOptions.axis,
          type: 'category',
          data: [],
        },
        yAxis: {
          ...$echartsOptions.axis,
          type: 'value',
        },
        series: [],
      };

      this.echartsView.setOption(option, true);
    },
    setChartOptions() {
      const { colorIndex } = this.$attrs;
      const { year, axisData, seriesData } = this.$props;
      this.echartsView.setOption({
        xAxis: {
          data: axisData,
        },
        series: [
          {
            name: year,
            type: 'pictorialBar',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            itemStyle: {
              normal: {
                color() {
                  const colorList = [
                    ['rgba(245,220,43,0.8)', 'rgba(255,223,1,0.6)'],
                    ['rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'],
                  ];
                  return colorList[colorIndex];
                },
              },
              emphasis: {
                opacity: 1,
              },
            },
            data: seriesData,
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.PictorialBar {
}
</style>
