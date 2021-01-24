<template>
  <div
    ref="LineGraph"
    class="w_h_100 LineArea"
  ></div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';

export default {
  name: 'LineArea',
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
      this.echartsView = $echartsOptions.echarts.init(this.$refs.LineGraph);
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      const { position, title } = this.$attrs;
      const option = {
        color: $echartsOptions.color,
        tooltip: $echartsOptions.tooltip,
        grid: $echartsOptions.grid,
        title: {
          ...$echartsOptions.title,
          text: title,
        },
        legend: {
          ...$echartsOptions.legend,
          data: [],
        },
        xAxis: {
          ...$echartsOptions.axis,
          type: 'category',
          // boundaryGap: false,
          data: [],
        },
        yAxis: {
          ...$echartsOptions.axis,
          position: position || 'left',
          type: 'value',
        },
        series: [],
      };

      this.echartsView.setOption(option, true);
    },
    setChartOptions() {
      const { areaColor } = this.$attrs;
      const { year, axisData, seriesData } = this.$props;
      this.echartsView.setOption({
        xAxis: {
          data: axisData,
        },
        series: [
          {
            name: year,
            type: 'line',
            smooth: true,
            symbolSize: 4,
            areaStyle: {
              normal: {
                color: $echartsOptions.linearGradientColor({ areaColor }),
                shadowColor: 'rgba(234,159,4, 0.9)',
                shadowBlur: 20,
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
.LineArea {
}
</style>
