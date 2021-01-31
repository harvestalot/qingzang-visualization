<template>
  <div
    ref="BarGraph"
    class="w_h_100 Bar"
  ></div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';

export default {
  name: 'Bar',
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
      type: Array | Object,
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
      this.echartsView = $echartsOptions.echarts.init(this.$refs.BarGraph);
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      const { colorIndex } = this.$attrs;
      const option = {
        color: colorIndex
          ? $echartsOptions.color[colorIndex]
          : $echartsOptions.color,
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
      const { year, axisData, seriesData } = this.$props;
      this.echartsView.setOption({
        xAxis: {
          data: axisData,
        },
        series: [
          {
            name: year,
            type: 'bar',
            data: seriesData,
            barWidth: '40%',
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Bar {
}
</style>
