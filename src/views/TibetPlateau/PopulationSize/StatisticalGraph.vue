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
      currentTime: '1990',
      currentTimeIndex: 0,
      legend: [],
      xData: [],
      colors: [
        '#F6C044',
        '#F3AD09',
        '#F18B07',
        '#F87309',
        '#f0993c',
        '#8DF965',
        '#d66349',
      ],
    };
  },
  mounted() {
    // this.initChart();
  },
  methods: {
    initChart({ year, index }) {
      this.currentTime = year;
      this.currentTimeIndex = index;
      if (!this.chartView) {
        this.chartView = $echartsOptions.echarts.init(
          this.$refs.statisticalGraph
        );
        this.initChartOption();
      }
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
        xAxis: {
          ...$echartsOptions.axis,
          type: 'category',
          data: [],
          // axisLabel: {
          //   rotate: 45,
          // },
        },

        yAxis: {
          ...$echartsOptions.axis,
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        // dataZoom: $echartsOptions.dataZoom,
        series: [],
      };
      this.chartView.setOption(option, true);
    },
    setChartOption() {
      const { currentTime, currentTimeIndex, colors } = this;
      let legend = [];
      let xData = [];
      const series = [];
      legend = [currentTime]; // Object.keys($population_size_data);
      xData = $population_size_data[currentTime].map((item) => item.name);
      legend.forEach((name) => {
        series.push({
          name,
          type: 'line',
          barWidth: '10%',
          symbolSize: 2,
          symbol: 'circle',
          lineStyle: {
            width: 1,
            color: colors[currentTimeIndex],
          },
          // markPoint: {
          //   label: {
          //     normal: {
          //       position: 'top',
          //       textStyle: {
          //         color: '#ea9f04',
          //       },
          //     },
          //   },
          //   data: [
          //     {
          //       type: 'max',
          //       name: '最大值',
          //     },
          //     {
          //       type: 'min',
          //       name: '最小值',
          //     },
          //   ],
          // },
          data: $population_size_data[name].map((item) => item.value[2]),
        });
      });
      this.chartView.setOption({
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
  height: 25%;
}
</style>
