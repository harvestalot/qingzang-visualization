<template>
  <div
    ref="echartsContainer"
    class="UrbanizationIndex"
  ></div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $data from '@/assets/mockData/urbanization_data';

require('echarts/lib/component/timeline');

export default {
  name: 'UrbanizationIndex',
  data() {
    return {
      echartsView: null,
      option: null,
      year: '',
      playInterval: 3000,
    };
  },
  mounted() {},
  methods: {
    initChart(year) {
      console.log(year);
      console.log(this.echartsView);
      this.year = year;
      if (!this.echartsView) {
        this.echartsView = $echartsOptions.echarts.init(
          this.$refs.echartsContainer
        );
        this.initChartOptions();
      }
      this.setChartOptions();
    },
    initChartOptions() {
      // if (this.echartsView) this.echartsView.clear();
      const { years } = this.$store.state;
      const { playInterval } = this;
      this.option = {
        baseOption: {
          color: $echartsOptions.color,
          tooltip: $echartsOptions.tooltip,
          grid: $echartsOptions.grid,
          legend: {
            ...$echartsOptions.legend,
            data: [],
          },
          xAxis: {
            ...$echartsOptions.axis,
            show: false,
            type: 'category',
            data: years,
          },
          yAxis: [
            {
              ...$echartsOptions.axis,
              type: 'value',
              name: '城镇指数',
              max: 0.8,
              interval: 0.2,
            },
            {
              ...$echartsOptions.axis,
              type: 'value',
              name: '生态指数',
              max: 0.8,
              interval: 0.2,
              splitLine: {
                show: false,
              },
            },
          ],
          timeline: {
            left: 10,
            right: 50,
            bottom: -10,
            axisType: 'category',
            autoPlay: true,
            playInterval,
            controlStyle: {
              showNextBtn: false,
              showPrevBtn: false,
            },
            data: this.$store.state.years,
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
        this.$store.commit(
          'setCurrentYear',
          this.$store.state.years[params.currentIndex]
        );
      });
    },
    setChartOptions() {
      const { years } = this.$store.state;
      const index = years.indexOf(this.year);
      this.option.options.push({
        series: [
          {
            name: '城镇指数',
            yAxisIndex: 0,
            type: 'line',
            label: {
              normal: {
                show: true,
                fontSize: 12,
                color: '#fff',
                offset: [20, 20],
                position: 'top',
                formatter: '{c}',
              },
            },
            data: $data[0].urbanization_data.slice(0, index + 1),
          },
          {
            name: '生态指数',
            yAxisIndex: 1,
            type: 'line',
            label: {
              normal: {
                show: true,
                fontSize: 12,
                color: '#fff',
                offset: [20, 0],
                position: 'top',
                formatter: '{c}',
              },
            },
            data: $data[0].ecological_data.slice(0, index + 1),
          },
        ],
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
.UrbanizationIndex {
}
</style>
