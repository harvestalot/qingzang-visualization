<template>
  <div
    ref="statisticalGraph"
    class="StatisticalGraph"
  >

  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $landUseScaleData from '@/assets/mockData/qingzang/land_use_scale_data.json';

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
      xData = $landUseScaleData[currentTime].map((item) => item.name);
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
          data: $landUseScaleData[name].map((item) => item.value[2]),
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
