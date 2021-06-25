<template>
  <div class="Map">
    <div ref="mapGraph" class="Map-container"></div>
  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $prefectureCity from '@/assets/mockData/qingzang/prefecture-city.json';
import $water from '@/assets/mockData/qingzang/water.json';

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
    mapData() {
      return $water.features.map((item) => ({
        name: item.properties.name,
        value: item.properties.value,
      }));
    },
  },
  mounted() {},
  methods: {
    initChart() {
      if (!this.mapView) {
        this.mapView = $echartsOptions.echarts.init(this.$refs.mapGraph);
        $echartsOptions.echarts.registerMap(
          'QZ-prefectureCity',
          $prefectureCity
        );
        $echartsOptions.echarts.registerMap('QZ-BOUNDARY', $water);
        this.initChartOptions();
      }
    },
    initChartOptions() {
      this.option = {
        title: {
          text: '水资源短缺的空间格局',
          left: 20,
          top: 20,
          textStyle: {
            color: '#fff',
          },
        },
        visualMap: [
          {
            type: 'continuous',
            left: 50,
            bottom: 100,
            text: ['强', '弱'],
            textStyle: {
              color: '#fff',
            },
            seriesIndex: 0,
            min: 0,
            max: 1,
            inRange: {
              color: ['#1F4111', '#00FF02'],
            },
          },
        ],
        geo: {
          map: 'QZ-prefectureCity',
          center: [89.0887, 33.1168],
          layoutCenter: ['50%', '50%'],
          layoutSize: '124%',
          // zlevel: 2,
          zoom: 1.1,
          z: 2,
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 700,
            color: '#fff',
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(255, 255, 255, .1)',
              borderColor: '#fff',
              borderWidth: 2,
            },
            emphasis: {
              show: false,
              // areaColor: '#f2d5ad',
              // shadowOffsetX: 0,
              // shadowOffsetY: 0,
              // borderWidth: 0,
            },
          },
        },
        series: [
          {
            type: 'map',
            map: 'QZ-BOUNDARY',
            center: [89.0887, 33.1168],
            layoutCenter: ['50%', '50%'],
            layoutSize: '124%',
            zoom: 1.12,
            z: 1,
            itemStyle: {
              normal: {
                areaColor: '#09184D',
                borderColor: 'rgba(117, 220, 255, .5)',
              },
              emphasis: {
                areaColor: '#09184D',
                borderColor: 'rgba(117, 220, 255, .5)',
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
}
</style>
