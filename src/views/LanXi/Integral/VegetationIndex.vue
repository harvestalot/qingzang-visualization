<template>
  <div class="echarts-container VegetationIndex">
    <LineArea
      position="right"
      :areaColor="1"
      :year="year"
      :title="title"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import LineArea from '@/components/LineArea.vue';
import $data from '@/assets/mockData/vegetation_index_data';

export default {
  name: 'VegetationIndex',
  components: {
    LineArea,
  },
  data() {
    return {
      year: 0,
      title: 'NDVI',
      axisData: [],
      seriesData: [],
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.axisData = $data[2].city_name;
      this.seriesData = $data[2].sum_data[year];
    },
  },
};
</script>

<style lang="scss" scoped>
.VegetationIndex {
  .ecahrt {
    height: 100%;
  }
}
</style>
