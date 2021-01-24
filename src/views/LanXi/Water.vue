<template>
  <div class="echarts-container Water">
    <Bar
      :colorIndex="1"
      :year="year"
      :title="title"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import $data from '@/assets/mockData/water_data';

export default {
  name: 'Water',
  components: {
    Bar,
  },
  data() {
    return {
      year: 0,
      title: '水资源',
      axisData: [],
      seriesData: {},
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.axisData = $data[2].city_name;
      this.seriesData = $data[2].water_data[year];
    },
  },
};
</script>

<style lang="scss" scoped>
.Water {
}
</style>
