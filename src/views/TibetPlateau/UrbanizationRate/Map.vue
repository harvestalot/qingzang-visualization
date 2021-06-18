<template>
  <div class="Map">
    <div ref="mapGraph" class="Map-container"></div>
  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $Town1990 from '@/assets/mockData/qingzang/Town1990';
import $Town2000 from '@/assets/mockData/qingzang/Town2000';
import $Town2010 from '@/assets/mockData/qingzang/Town2010';

require('echarts/lib/chart/map');
require('echarts/lib/chart/scatter');
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
      timeline: ['1990', '2000', '2010'],
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
  computed: {
    mapData({ currentTime }) {
      let data = $Town1990;
      currentTime === '2000' ? (data = $Town2000) : (data = $Town2010);
      return data.features.map((item) => ({
        name: item.properties.name,
        value: item.properties.value,
      }));
    },
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
        this.initChartOptions();
      }
      this.initChartOptions();
    },
    initChartOptions() {
      let mapJson = $Town1990;
      this.currentTime === '2000'
        ? (mapJson = $Town2000)
        : (mapJson = $Town2010);
      $echartsOptions.echarts.registerMap('QZ-BOUNDARY', mapJson);
      this.option = {
        title: {
          text: '城市化率',
          left: 20,
          top: 20,
          textStyle: {
            color: '#fff',
          },
          subtext: `${this.currentTime}年`,
          subtextStyle: {
            fontSize: 14,
            color: '#f1f1f1 ',
          },
        },
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 100,
            inRange: {
              color: ['#09184D', '#1D48E6'],
            },
          },
        ],
        geo: {
          map: 'QZ-BOUNDARY',
          center: [89.0887, 33.1168],
          layoutCenter: ['50%', '45%'],
          layoutSize: '124%',
          // itemStyle: {
          //   normal: {
          //     borderColor: 'rgba(0, 0, 0, 0.2)',
          //   },
          //   emphasis: {
          //     areaColor: '#f2d5ad',
          //     shadowOffsetX: 0,
          //     shadowOffsetY: 0,
          //     borderWidth: 0,
          //   },
          // },
        },
        series: [
          {
            type: 'map',
            map: 'QZ-BOUNDARY',
            center: [89.0887, 33.1168],
            layoutCenter: ['50%', '45%'],
            layoutSize: '124%',
            itemStyle: {
              normal: {
                areaColor: '#09184D',
                borderColor: '#75DCFF',
              },
              emphasis: {
                areaColor: '#09184D',
                borderColor: '#75DCFF',
              },
            },
            label: {
              emphasis: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
              },
            },
            data: this.mapData,
          },
        ],
      };
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
  ::v-deep .TimerShaft {
    position: absolute;
    left: 0;
    bottom: 10px;
  }
}
</style>
