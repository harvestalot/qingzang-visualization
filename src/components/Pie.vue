<template>
  <div
    ref="PieGraph"
    class="w_h_100 Pie"
  ></div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';

export default {
  name: 'Pie',
  props: {
    year: {
      type: Number,
      required: true,
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
  methods: {
    initChart() {
      this.echartsView = $echartsOptions.echarts.init(this.$refs.PieGraph);
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      const option = {
        color: $echartsOptions.color,
        title: {
          ...$echartsOptions.title,
          text: this.$attrs.title,
        },
        legend: {
          ...$echartsOptions.legend,
          data: [],
        },
        tooltip: {
          ...$echartsOptions.tooltip,
          formatter: '{a} <br/>{b} : {c}亿元  ({d}%)',
        },
        series: [],
      };
      this.echartsView.setOption(option, true);
    },
    setChartOptions() {
      const { seriesData } = this.$props;
      this.echartsView.setOption({
        series: {
          name: '国内生产总值',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          radius: this.$attrs.radius ? ['40%', '65%'] : [0, '75%'],
          label: {
            show: true,
            formatter: '{b}',
          },
          data: seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Pie {
}
</style>
