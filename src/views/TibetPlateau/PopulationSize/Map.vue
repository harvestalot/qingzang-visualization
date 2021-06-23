<template>
  <div class="Map">
    <div ref="mapGraph" class="Map-container"></div>
    <!-- <TimerShaft
      :times="['1990', '2000', '2010', '2015']"
      :futureTimes="['2025', '2030', '2035']"
      :currentTime="currentTime"
    /> -->
  </div>
</template>

<script>
// import TimerShaft from '@/components/TimerShaft.vue';
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
    // TimerShaft,
  },
  data() {
    return {
      mapView: null,
      option: null,
      currentTime: '1990',
      currentTimeIndex: 0,
      timeline: ['1990', '2000', '2010', '2015', '2025', '2030', '2035'],
      // colors: [
      //   '#F6C044',
      //   '#F3AD09',
      //   '#F18B07',
      //   '#F87309',
      //   '#f0993c',
      //   '#8DF965',
      //   '#d66349',
      // ],
      colors: [
        '#ff0000',
        '#ff0000',
        '#ff0000',
        '#ff0000',
        '#db87f1',
        '#db87f1',
        '#db87f1',
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
      if (!this.mapView) {
        this.mapView = $echartsOptions.echarts.init(this.$refs.mapGraph);
        $echartsOptions.echarts.registerMap('QZ-BOUNDARY', {
          type: 'FeatureCollection',
          features: $thridPoleBoundaryData.concat($qingzangPrefectureLevelCity),
        });
        this.initChartOptions();
      }
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
          layoutCenter: ['47%', '41%'],
          layoutSize: '124%',
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
              borderColor: '#389BB7',
              areaColor: '#000',
              borderWidth: 2,
            },
            emphasis: {
              areaColor: '#389BB7',
              borderColor: '#389BB7',
              borderWidth: 2,
            },
          },
          regions: [
            {
              name: '青藏地区',
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  show: false,
                  areaColor: 'rgba(0,0,0,0)',
                  borderColor: '#389BB7',
                },
                emphasis: {
                  show: false,
                  areaColor: 'rgba(0,0,0,0)',
                },
              },
            },
          ],
        },
        series: [
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
      const { currentTime, currentTimeIndex, colors } = this;
      this.option.title.subtext = `${currentTime}年`;
      this.option.series[0].itemStyle.normal.color = colors[currentTimeIndex];
      this.option.series[0].data = this.getFormatData(
        $populationSizeData[this.currentTime]
      );
      this.mapView.setOption(this.option, true);
    },
    getFormatData(data) {
      const newData = [];
      for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        const value = item.value[2];
        let symbolSize = 5;
        if (value > 100) {
          symbolSize = 50;
        } else if (value > 50 && value < 100) {
          symbolSize = 40;
        } else if (value > 20 && value < 50) {
          symbolSize = 30;
        } else if (value > 10 && value < 20) {
          symbolSize = 20;
        } else if (value > 5 && value < 10) {
          symbolSize = 15;
        } else if (value > 1 && value < 5) {
          symbolSize = 10;
        } else if (value < 1) {
          symbolSize = 5;
        }
        newData.push({
          name: item.name,
          value: [item.value[0], item.value[1], symbolSize],
        });
      }
      return newData;
    },
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
