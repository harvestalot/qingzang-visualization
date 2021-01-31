<template>
  <div class="Map">
    <div
      ref="mapGraph"
      class="Map-container"
    ></div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import $echartsOptions from '@/utils/echarts';
import $qingzangPrefectureLevelCity from '@/assets/mockData/qingzang_prefecture_level_city.json';
import $thridPoleBoundaryData from '@/assets/mockData/thrid_pole_boundary_data.json';
import $kernelDensityData from '@/assets/mockData/qingzang/kernel_density_data.json';

require('echarts/lib/chart/map');
require('echarts/lib/chart/heatmap');
require('echarts/lib/component/geo');
require('echarts/lib/component/visualMap');

export default {
  name: 'Map',
  data() {
    return {
      mapView: null,
      option: null,
      currentTime: '1990',
      currentTimeIndex: 0,
      colors: [
        '#F6C044',
        '#F3AD09',
        '#F18B07',
        '#F87309',
        '#f0993c',
        '#8DF965',
        '#d66349',
      ],
      kernelDensityData: {},
    };
  },
  // computed: {
  //   ...mapState({
  //     QZBoundary: (state) => state.mapData.QZBoundary,
  //     QZCity: (state) => state.mapData.QZCity,
  //   }),
  // },
  mounted() {},
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
        // this.$axios
        //   .get('/mockData/qingzang/kernel_density_data.json')
        //   .then((res) => {
        //     this.kernelDensityData = res;
        //     this.initChartOptions();
        //   });
      }
      this.setChartOptions();
    },
    initChartOptions() {
      this.option = {
        title: {
          text: '城镇时空分布的核密度',
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
        visualMap: [
          {
            type: 'piecewise',
            left: 20,
            bottom: 70,
            min: 0,
            max: 11.8949,
            splitNumber: 6,
            inRange: {
              color: [
                '#FFF',
                '#C3E3E0',
                '#96CCCC',
                '#6E93B0',
                '#4E7A9F',
                '#2E638B',
              ],
            },
            textStyle: {
              color: '#fff',
            },
          },
        ],
        geo: {
          map: 'QZ-BOUNDARY',
          center: [89.0887, 33.1168],
          layoutCenter: ['50%', '50%'],
          layoutSize: '120%',
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
            type: 'heatmap',
            coordinateSystem: 'geo',
            pointSize: 2, // 设置 热力图 点 的大小
            blurSize: 3, // 设置点的 阴影半径
            data: $kernelDensityData[this.currentTime],
          },
        ],
      };
      this.mapView.setOption(this.option, true);
    },
    setChartOptions() {
      const { currentTime } = this;
      this.option.title.subtext = `${currentTime}年`;
      this.option.series[0].data = $kernelDensityData[this.currentTime];
      this.mapView.setOption(this.option, true);
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
}
</style>
