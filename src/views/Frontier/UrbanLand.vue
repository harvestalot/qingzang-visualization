<template>
  <div class="echarts-container UrbanLand">
    <LineArea
      :year="year"
      :title="title"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import LineArea from '@/components/LineArea.vue';
import $data from '@/assets/mockData/urban_land_data';

export default {
  name: 'UrbanLand',
  components: {
    LineArea,
  },
  data() {
    return {
      year: 0,
      title: '城镇用地',
      axisData: [],
      seriesData: [],
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.axisData = $data[3].city_name;
      this.seriesData = $data[3].urban_land_data[year];
    },
  },
};
</script>

<style lang="scss" scoped>
.UrbanLand {
}
</style>
