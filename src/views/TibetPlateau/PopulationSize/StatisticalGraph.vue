<template>
  <div
    ref="statisticalGraph"
    class="StatisticalGraph"
  >

  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $population_size_data from '@/assets/mockData/qingzang/population_size_data.json';

require('echarts/lib/component/dataZoom');
require('echarts/lib/component/markPoint');

export default {
  name: 'StatisticalGraph',
  data() {
    return {
      chartView: null,
      legend: [],
      xData: [],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chartView = $echartsOptions.echarts.init(
        this.$refs.statisticalGraph
      );
      this.initChartOption();
      this.setChartOption();
    },
    initChartOption() {
      const option = {
        color: $echartsOptions.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff',
            },
          },
        },
        grid: {
          ...$echartsOptions.grid,
          bottom: 50,
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
        dataZoom: $echartsOptions.dataZoom,
        series: [],
      };
      this.chartView.setOption(option, true);
    },
    setChartOption() {
      let legend = [];
      let xData = [];
      const series = [];
      legend = Object.keys($population_size_data);
      xData = $population_size_data['1990'].map((item) => item.name);
      legend.forEach((name) => {
        series.push({
          name,
          type: 'line',
          symbolSize: 6,
          symbol: 'circle',
          markPoint: {
            label: {
              normal: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            data: [
              {
                type: 'max',
                name: '最大值',
              },
              {
                type: 'min',
                name: '最小值',
              },
            ],
          },
          data: $population_size_data[name].map((item) => item.value[2]),
        });
      });
      this.chartView.setOption({
        legend: {
          data: legend,
        },
        xAxis: {
          data: xData,
        },
        series,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.StatisticalGraph {
  width: 100%;
  height: 100%;
}
</style>
