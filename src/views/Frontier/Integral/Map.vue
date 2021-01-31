<template>
  <div
    ref="mapGraph"
    class="Map"
  >

  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $borderAreaData from '@/assets/mockData/border_city_zone_data.json';

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
        $echartsOptions.echarts.registerMap('FRONTIER-CITY', $borderAreaData);
        this.initChartOptions();
      }
    },
    initChartOptions() {
      const option = {
        geo: {
          map: 'FRONTIER-CITY',
          layoutCenter: ['50%', '50%'],
          layoutSize: '150%',
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
