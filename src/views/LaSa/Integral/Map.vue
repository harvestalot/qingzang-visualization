<template>
  <div
    ref="mapGraph"
    class="Map"
  >

  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $lasaAreaData from '@/assets/mockData/lasa_metropolitan_area_data.json';

require('echarts/lib/chart/map');
require('echarts/lib/component/geo');

export default {
  name: 'Map',
  data() {
    return {
      mapView: null,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      if (!this.mapView) {
        this.mapView = $echartsOptions.echarts.init(this.$refs.mapGraph);
        $echartsOptions.echarts.registerMap('LASA-CITY', $lasaAreaData);
        this.initChartOptions();
      }
    },
    initChartOptions() {
      const option = {
        geo: {
          map: 'LASA-CITY',
          layoutCenter: ['50%', '50%'],
          layoutSize: '100%',
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
        },
        series: [],
      };
      this.mapView.setOption(option, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.Map {
  width: 100%;
  height: 100%;
}
</style>
