<template>
  <div class="Map">
    <div
      ref="mapGraph"
      class="Map-container"
    ></div>
  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $water from '@/assets/mockData/qingzang/water.json';

require('echarts/lib/chart/map');
require('echarts/lib/chart/scatter');
require('echarts/lib/component/geo');

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
        $echartsOptions.echarts.registerMap('QZ-BOUNDARY', $water);
        this.initChartOptions();
      }
    },
    initChartOptions() {
      console.log(this.mapData);
      this.option = {
        title: {
          text: '水资源',
          left: 20,
          top: 20,
          textStyle: {
            color: '#fff',
          },
        },
        visualMap:
          // [
          {
            // type: 'continuous',
            show: true,
            min: 0,
            max: 1,
            // seriesIndex: [0],
            // range: [0, 1],
            // pieces: [
            //   { gte: 0.1, lte: 0.3, label: '1-9人' },
            //   { lte: 0.1, label: '1-9人' },
            // ],
            inRange: {
              color: [
                '#d1d4da',
                '#bacae8',
                '#96b5ef',
                '#6797ef',
                '#3375e4',
                '#035cf5',
              ],
            },
          },
        // ],
        geo: {
          map: 'QZ-BOUNDARY',
          center: [89.0887, 33.1168],
          layoutCenter: ['50%', '50%'],
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
            // name: '人口规模',
            type: 'map',
            // map: 'QZ-BOUNDARY',
            // geoIndex: 0,
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
