<template>
  <div
    ref="LiquidfillPieGraph"
    class="w_h_100 LiquidfillPie"
  >
  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import 'echarts-liquidfill/src/liquidFill';

export default {
  name: 'LiquidfillPie',
  props: {
    year: {
      type: Number,
      required: true,
    },
    seriesData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      echartsView: null,
      option: null,
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
  methods: {
    initChart() {
      this.echartsView = $echartsOptions.echarts.init(
        this.$refs.LiquidfillPieGraph
      );
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      const { seriesData } = this.$props;
      this.option = {
        color: $echartsOptions.color,
        title: [
          {
            ...$echartsOptions.title,
            text: '水资源',
          },
          {
            top: '40%',
            left: 'center',
            text: this.$attrs.title,
            textStyle: {
              color: '#EA9F04',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 14,
            },
            subtext: `${
              seriesData.total_storage > 0
                ? (
                    (seriesData.total_consumption / seriesData.total_storage) *
                    100
                  ).toFixed(2)
                : 0
            }%`,
            subtextStyle: {
              color: '#fff',
              fontSize: 12,
            },
          },
        ],
        series: [
          {
            type: 'liquidFill',
            itemStyle: {
              normal: {
                color: '#313131',
                opacity: 1,
              },
            },
            name: this.$attrs.title,
            data: [
              {
                value: 0.6,
                itemStyle: {
                  normal: {
                    color: '#53d5ff',
                    opacity: 0.9,
                  },
                },
              },
            ],
            color: ['#53d5ff'],
            radius: '50%',
            center: ['50%', '60%'],
            label: {
              normal: {
                formatter: '',
                textStyle: {
                  fontSize: 12,
                },
              },
            },
            outline: {
              itemStyle: {
                borderColor: '#86c5ff',
                borderWidth: 0,
              },
              borderDistance: 0,
            },
          },
          {
            type: 'pie',
            center: ['50%', '60%'],
            radius: ['50%', '70%'],
            label: {
              show: true,
              normal: {
                formatter: '{b}\n{d}%',
                show: true,
                position: '',
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },

            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: '#fff',
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            data: seriesData.pie_data,
          },
        ],
      };
      this.echartsView.setOption(this.option, true);
    },
    setChartOptions() {
      const { seriesData } = this.$props;
      this.option.series[1].data = seriesData.pie_data;
      this.echartsView.setOption(this.option);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
