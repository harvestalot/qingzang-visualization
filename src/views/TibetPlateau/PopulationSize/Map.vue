<template>
  <div class="Map">
    <div
      ref="mapGraph"
      class="Map-container"
    ></div>
    <TimerShaft
      :times="['1990', '2000', '2010', '2015']"
      :futureTimes="['2025', '2030', '2035']"
      :currentTime="currentTime"
    />
  </div>
</template>

<script>
import TimerShaft from '@/components/TimerShaft.vue';
import $echartsOptions from '@/utils/echarts';
import $qingzangPrefectureLevelCity from '@/assets/mockData/qingzang_prefecture_level_city';
import $thridPoleBoundaryData from '@/assets/mockData/thrid_pole_boundary_data';
import $populationSizeData from '@/assets/mockData/qingzang/population_size_data';

require('echarts/lib/chart/map');
require('echarts/lib/chart/scatter');
require('echarts/lib/component/geo');

export default {
  name: 'Map',
  components: {
    TimerShaft,
  },
  data() {
    return {
      mapView: null,
      option: null,
      timer: null,
      currentTime: '1990',
      timeline: ['1990', '2000', '2010', '2015', '2025', '2030', '2035'],
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
    this.initChart();
  },
  methods: {
    initChart() {
      this.mapView = $echartsOptions.echarts.init(this.$refs.mapGraph);
      $echartsOptions.echarts.registerMap('QZ-BOUNDARY', {
        type: 'FeatureCollection',
        features: $thridPoleBoundaryData,
      });
      $echartsOptions.echarts.registerMap('QZ-CITY', {
        type: 'FeatureCollection',
        features: $qingzangPrefectureLevelCity,
      });
      this.initChartOptions();
      this.setChartOptions();
    },
    initChartOptions() {
      this.option = {
        title: {
          text: '人口规模时空演变',
          left: 20,
          top: 20,
          textStyle: {
            color: '#fff',
          },
          subtext: '1990年',
          subtextStyle: {
            fontSize: 14,
            color: '#f1f1f1 ',
          },
        },
        geo: {
          map: 'QZ-BOUNDARY',
          center: [89.0887, 33.1168],
          layoutCenter: ['47%', '51%'],
          layoutSize: '124%',
          zlevel: 0,
          label: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#389BB7',
              areaColor: '#000',
              borderWidth: 2,
            },
            emphasis: {
              areaColor: '#000',
              borderColor: '#389BB7',
              borderWidth: 2,
            },
          },
        },
        series: [
          {
            type: 'map',
            map: 'QZ-CITY',
            // geoIndex: 0,
            center: [90.5887, 33.2368],
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            zlevel: 1,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
              },
              emphasis: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            itemStyle: {
              normal: {
                show: true,
                areaColor: 'rgba(0,0,0,0)',
                borderColor: '#2185EF',
              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0,
              },
            },
          },
          {
            name: '人口规模',
            type: 'scatter',
            zlevel: 2,
            coordinateSystem: 'geo',
            data: this.getFormatData($populationSizeData['1990']),
            symbolSize(val) {
              return val[2];
            },
            label: {
              normal: {
                show: false,
                formatter: '{b}',
                position: 'center',
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: this.colors[0],
              },
              // emphasis: {
              //   areaColor: this.colors[0],
              // },
            },
          },
        ],
      };
      this.mapView.setOption(this.option, true);
    },
    setChartOptions() {
      let index = 1;
      this.timer = setInterval(() => {
        if (index === 7) index = 0;
        this.currentTime = this.timeline[index];
        this.option.title.subtext = `${this.currentTime}年`;
        this.option.series[1].itemStyle.normal.color = this.colors[index];
        this.option.series[1].data = this.getFormatData(
          $populationSizeData[this.currentTime]
        );
        this.mapView.setOption(this.option, true);
        index += 1;
      }, 5000);
    },
    getFormatData(data) {
      const newData = [];
      for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        const value = item.value[2];
        if (value > 100) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 50],
          });
        } else if (value > 50 && value < 100) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 40],
          });
        } else if (value > 20 && value < 50) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 30],
          });
        } else if (value > 10 && value < 20) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 20],
          });
        } else if (value > 5 && value < 10) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 15],
          });
        } else if (value > 1 && value < 5) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 10],
          });
        } else if (value < 1) {
          newData.push({
            name: item.name,
            value: [item.value[0], item.value[1], 5],
          });
        }
      }
      return newData;
    },
  },
  destroyed() {
    clearInterval(this.timer);
    // this.echartsView.dispose();
    // this.echartsView = null;
    // this.option = null;
  },
};
</script>

<style lang="scss" scoped>
.Map {
  position: relative;
  height: 100%;
  &-container {
    width: 100%;
    height: 100%;
  }
  ::v-deep .TimerShaft {
    position: absolute;
    left: 0;
    bottom: 10px;
  }
}
</style>
