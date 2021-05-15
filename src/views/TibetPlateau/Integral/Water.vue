<template>
  <div class="echarts-container Water">
    <LiquidfillPie
      :year="year"
      :title="title"
      :seriesData="seriesData"
      @open-view-detail="openWaterDetail"
      @close-view-detail="isDetail = false"
    />
    <div
      ref="waterDetail"
      class="Water-detail"
      v-if="isDetail"
    />
  </div>
</template>

<script>
import LiquidfillPie from '@/components/LiquidfillPie.vue';
import $data from '@/assets/mockData/water_data';
import $echartsOptions from '@/utils/echarts';

export default {
  name: 'Water',
  components: {
    LiquidfillPie,
  },
  data() {
    return {
      year: 0,
      title: '水资源',
      seriesData: {},
      isDetail: false,
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.seriesData = $data[0][year];
    },
    openWaterDetail(name) {
      this.isDetail = true;
      this.$nextTick(() => {
        this.loadWaterDetail(name);
      });
    },
    loadWaterDetail(name) {
      const myChartDataLayer = $echartsOptions.echarts.init(
        this.$refs.waterDetail
      );
      const detailsOption = {
        grid: {
          containLabel: true,
          left: 20,
          top: 20,
          right: 30,
          bottom: 10,
        },
        yAxis: {
          axisLabel: $echartsOptions.axis.axisLabel,
          axisLine: $echartsOptions.axis.axisLine,
          splitLine: $echartsOptions.axis.splitLine,
          axisTick: {
            show: false,
          },
        },
        xAxis: {
          data: this.seriesData.bar_x_data,
          axisLabel: {
            fontSize: 10,
            color: '#fff',
          },
          axisLine: {
            lineStyle: {
              color: '#00c7ff',
            },
          },
        },
        series: [
          {
            type: 'bar',
            // stack: '2',
            name: '城镇居民',
            legendHoverLink: false,
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter(v) {
                  return v.value.toFixed(2);
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                },
              },
            },
            itemStyle: {
              normal: {
                color: '#2EDDCD',
              },
              emphasis: {
                color: '#2EDDCD',
              },
            },
            data: this.seriesData.bar_data
              ? this.seriesData.bar_data[name]
              : [],
          },
        ],
      };
      myChartDataLayer.setOption(detailsOption, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.Water {
  position: relative;
  &-detail {
    position: absolute;
    left: -100%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgb(49, 49, 49);
    z-index: 99999;
  }
}
</style>
