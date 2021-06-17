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
import $Town1990 from '@/assets/mockData/qingzang/Town1990';
import $Town2000 from '@/assets/mockData/qingzang/Town2000';
import $Town2010 from '@/assets/mockData/qingzang/Town2010';

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
    mapData({ currentTime }) {
      let data = $Town1990;
      currentTime === '2000' ? (data = $Town2000) : (data = $Town2010);
      return data.features.map((item) => ({
        name: item.properties.name,
        value: item.properties['城镇化'],
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
      console.log(this.mapData);
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
        visualMap: {
          // min: 0,
          // max: 100,
          show: true,
          range: [0, 100],
          inRange: {
            color: ['#FF6464', '#FFA85A', '#FFEC6F', '#8BBCFE'],
          },
        },
        geo: {
          map: 'QZ-BOUNDARY',
          center: [89.0887, 33.1168],
          layoutCenter: ['47%', '41%'],
          layoutSize: '124%',
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            emphasis: {
              areaColor: '#f2d5ad',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            name: '人口规模',
            type: 'map',
            geoIndex: 0,
            data: this.mapData,
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
